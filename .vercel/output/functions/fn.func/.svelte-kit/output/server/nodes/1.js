

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.87b8fcf8.js","_app/immutable/chunks/scheduler.4b895fe1.js","_app/immutable/chunks/index.bbdfbc60.js","_app/immutable/chunks/singletons.f1add263.js"];
export const stylesheets = [];
export const fonts = [];
