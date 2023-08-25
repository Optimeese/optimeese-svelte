

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3fd20225.js","_app/immutable/chunks/scheduler.4b895fe1.js","_app/immutable/chunks/index.bbdfbc60.js"];
export const stylesheets = [];
export const fonts = [];
