

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1a5f0d98.js","_app/immutable/chunks/scheduler.4b895fe1.js","_app/immutable/chunks/index.bbdfbc60.js","_app/immutable/chunks/singletons.e591ae40.js"];
export const stylesheets = [];
export const fonts = [];
