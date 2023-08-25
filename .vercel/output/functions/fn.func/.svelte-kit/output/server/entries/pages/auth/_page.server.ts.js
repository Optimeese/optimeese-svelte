import { f as fail, r as redirect } from "../../../chunks/index.js";
const actions = {
  signIn: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error } = supabase.auth.signInWithPassword({
      email,
      password
    });
    console.log({ data, error });
    if (error) {
      return fail(error.status || 500, {
        error: error.message || "Server error",
        values: {
          email
        }
      });
    }
    throw redirect(303, "/");
  }
};
export {
  actions
};
