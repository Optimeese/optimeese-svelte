import { c as create_ssr_component, i as is_promise, n as noop, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-70ijby">Waiting for data...</p> `;
    }
    return function(data2) {
      return ` <p data-svelte-h="svelte-1gokuyf">Received data:</p> <pre>${escape(JSON.stringify(data2, null, 2))}</pre> `;
    }(__value);
  }(data.awaited.results)}`;
});
export {
  Page as default
};
