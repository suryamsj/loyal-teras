import { callGemini } from '$lib/server/gemini';
import { supabase } from '$lib/server/supabase';
import { GEMINIPROMPT } from '$lib/utils/prompt';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { query } = await request.json();

    const sanitizedQuery = query.replace(/[^\w\s]/gi, '');

    const { data: documents, error } = await supabase
      .from('documents')
      .select('*')
      .textSearch('content', `'${sanitizedQuery}'`, { type: 'plain' });

    if (error) {
      console.error('Error retrieving documents:', error);
      return new Response(JSON.stringify({ error: 'Error retrieving documents' }), { status: 500 });
    }

    if (!documents || documents.length === 0) {
      return new Response(JSON.stringify({ error: 'No relevant documents found' }), { status: 404 });
    }

    const context = documents.map((doc) => doc.content).join('\n');

    const prompt = GEMINIPROMPT
    .replace('{{context}}', context)
    .replace('{{query}}', query);

    const geminiResponse = await callGemini(prompt);

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
      return json({error: 'No response generated from Teras AI'}, {status: 500});
    }

    return json({answer}, {status: 200});
  } catch (err) {
    console.error(err);
    return json({error: 'Internal server Error.'}, {status: 500});
  }
};
