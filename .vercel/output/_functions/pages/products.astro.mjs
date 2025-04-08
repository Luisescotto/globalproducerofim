import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import { c as $$Layout } from '../chunks/Layout_BHc_XtLF.mjs';
import { $ as $$Products$1 } from '../chunks/products_Ce6Vlp4V.mjs';
export { renderers } from '../renderers.mjs';

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Products - Tranding Global Produce Rofim" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", $$Products$1, {})} ` })}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/products.astro", void 0);

const $$file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/products.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
