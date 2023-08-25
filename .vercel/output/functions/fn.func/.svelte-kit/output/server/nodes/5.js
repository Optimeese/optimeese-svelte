import * as server from '../entries/pages/test/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/test/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.336a3b10.js","_app/immutable/chunks/scheduler.4b895fe1.js","_app/immutable/chunks/index.bbdfbc60.js"];
export const stylesheets = [];
export const fonts = [];
