import * as server from '../entries/pages/auth/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.2c80181e.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.10baf253.js"];
export const stylesheets = [];
export const fonts = [];
