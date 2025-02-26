import { loginScema } from "$lib/validation/login.schema";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async({request})=>{
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    try{
      const validated = loginScema.safeParse({ username, password });
      if (!validated.success) {
				const errors = validated.error.errors.reduce(
					(acc: Record<string, string[]>, { path, message }) => {
						const field = path[0];
						acc[field] = acc[field] ? [...acc[field], message] : [message];
						return acc;
					},
					{}
				);

				const result = Object.fromEntries(
					Object.entries(errors).map(([field, messages]) => [field, messages.join(', ')])
				);

				return fail(400, { error: true, errors: result });
			}

      // CEK USER
      if(username !== "admin" || password !== "admin"){
        return fail(401, { error: true, message: "Username or Password is incorrect" });
      }
    }catch{
      return fail(500, { error: true, message: "Internal Server Error" });
    }
    throw redirect(305, "/dashboard");
  }
};
