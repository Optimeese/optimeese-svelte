import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-4p3d56">Welcome</h1> <pre><code>${escape(JSON.stringify(data, null, 2))}</code></pre> <form method="POST" data-svelte-h="svelte-38sdo2"><button>Log out</button></form>`;
});
export {
  Page as default
};
