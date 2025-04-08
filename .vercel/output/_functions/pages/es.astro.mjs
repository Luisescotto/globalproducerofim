import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import { c as $$Layout } from '../chunks/Layout_Bua67f1J.mjs';
import { $ as $$Index$1 } from '../chunks/index_CRCaNDqg.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tranding Global Produce Rofim" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", $$Index$1, {})} ` })}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
