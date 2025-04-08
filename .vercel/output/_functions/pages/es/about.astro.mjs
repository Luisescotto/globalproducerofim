import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import { c as $$Layout } from '../../chunks/Layout_BHc_XtLF.mjs';
import { $ as $$About$1 } from '../../chunks/about_8TEYtSxQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About us - Tranding Global Produce Rofim" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", $$About$1, {})} ` })}`;
}, "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/es/about.astro", void 0);

const $$file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/pages/es/about.astro";
const $$url = "/es/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
