import { r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ locals: { supabase } }) => {
    supabase.auth.signOut();
    throw redirect(303, "/");
  }
};
export {
  actions
};
