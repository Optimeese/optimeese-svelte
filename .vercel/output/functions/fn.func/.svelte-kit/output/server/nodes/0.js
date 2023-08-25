import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.0124a51d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.10baf253.js"];
export const stylesheets = ["_app/immutable/assets/0.0a4e3d67.css"];
export const fonts = [];
