import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '/src/css/style.css';header.svelte-10ae8{display:flex;justify-content:space-between;align-items:center;& a {\n			text-decoration: none;\n			color: inherit;\n		}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { user } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<header class="svelte-10ae8"><h1 data-svelte-h="svelte-1ul2acr"><a href="/">Optimeese</a></h1> <nav><a href="/" data-svelte-h="svelte-5a0zws">Home</a> ${user ? `<a href="/profile">${escape(user.email)}</a>` : `<a href="/auth" data-svelte-h="svelte-17438o0">Log in</a>`}</nav></header> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
