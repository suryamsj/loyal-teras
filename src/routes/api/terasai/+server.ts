import type { RequestHandler } from '@sveltejs/kit';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function callGemini(prompt: string) {
  const geminiApiKey = process.env.GEMINI_API_KEY!;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();
  return data;
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { query } = await request.json();

    const sanitizedQuery = query.replace(/[^\w\s]/gi, '');

    const { data: documents, error } = await supabase
      .from('documents')
      .select('*')
      .textSearch('content', `'${sanitizedQuery}'`, { type: 'plain' }); // Correct usage of textSearch

    if (error) {
      console.error('Error retrieving documents:', error);
      return new Response(JSON.stringify({ error: 'Error retrieving documents' }), { status: 500 });
    }

    if (!documents || documents.length === 0) {
      return new Response(JSON.stringify({ error: 'No relevant documents found' }), { status: 404 });
    }

    const context = documents.map((doc) => doc.content).join('\n');

    const prompt = `
    You are Teras AI, a powerful AI tool that helps you to optimize user business's customer loyalty. You can Optimize Loyalty Strategy, answer about about customer segmentation, campaign optimization, and AI-powered insights to enhance loyalty program.

    Based on the following context, answer the user's question.

    Context:
    ${context}

    Question:
    ${query}
    `;

    const geminiResponse = await callGemini(prompt);

    console.log(geminiResponse);

    const answer =
      geminiResponse.candidates &&
      geminiResponse.candidates[0] &&
      geminiResponse.candidates[0].content &&
      geminiResponse.candidates[0].content.parts &&
      geminiResponse.candidates[0].content.parts[0] &&
      geminiResponse.candidates[0].content.parts[0].text
        ? geminiResponse.candidates[0].content.parts[0].text.trim()
        : null;

    if (!answer) {
      return new Response(JSON.stringify({ error: 'No response generated from Gemini' }), { status: 500 });
    }

    return new Response(JSON.stringify({ answer }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};