import * as server from '../entries/pages/profile/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profile/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.72c66aa8.js","_app/immutable/chunks/scheduler.4b895fe1.js","_app/immutable/chunks/index.bbdfbc60.js"];
export const stylesheets = [];
export const fonts = [];
