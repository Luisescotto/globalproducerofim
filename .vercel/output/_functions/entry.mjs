import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports } from './chunks/entrypoint_-UTp9yYq.mjs';
import { manifest } from './manifest_CmuWp8k1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/es/about.astro.mjs');
const _page4 = () => import('./pages/es/contact.astro.mjs');
const _page5 = () => import('./pages/es/product/_id_.astro.mjs');
const _page6 = () => import('./pages/es/products.astro.mjs');
const _page7 = () => import('./pages/es.astro.mjs');
const _page8 = () => import('./pages/product/_id_.astro.mjs');
const _page9 = () => import('./pages/products.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/es/about.astro", _page3],
    ["src/pages/es/contact.astro", _page4],
    ["src/pages/es/product/[id].astro", _page5],
    ["src/pages/es/products.astro", _page6],
    ["src/pages/es/index.astro", _page7],
    ["src/pages/product/[id].astro", _page8],
    ["src/pages/products.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8f485a7e-2254-4aa5-8d36-e645bd71d200",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
