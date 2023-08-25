import "@supabase/auth-helpers-sveltekit";
const handle = async ({ event, resolve }) => {
  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range";
    }
  });
};
export {
  handle
};
