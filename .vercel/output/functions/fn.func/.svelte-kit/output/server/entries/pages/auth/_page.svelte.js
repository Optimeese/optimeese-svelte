import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`<h1 data-svelte-h="svelte-13vjqy4">Sign up</h1> <form method="POST" action="?/signUp" data-svelte-h="svelte-1b8hw23"><label for="email">Email</label> <input id="email" type="email" name="email"> <label for="password">Password</label> <input id="password" type="password" name="password"> <button type="submit">Sign up</button></form> <button data-svelte-h="svelte-1citt9w">Already have an account? Sign in</button>`}`;
});
export {
  Page as default
};
