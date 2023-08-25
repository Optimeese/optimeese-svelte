import * as server from '../entries/pages/profile/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profile/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.7c33f0e2.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.10baf253.js"];
export const stylesheets = [];
export const fonts = [];
