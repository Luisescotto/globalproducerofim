import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Garlic","slug":"garlic","description":"A pungent, aromatic bulb with cloves that add bold flavor to cuisines worldwide. Used in cooking (sauces, roasts, sautés), traditional remedies, and natural health practices. Rich in allicin, vitamins B6 and C, and antioxidants.","img":"garlic.webp","category":"Roots","packageType":"Sack","pounds":"23 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/garlic.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n             \r\n            \r\n                                                                                                                                                                                                                                                 \r\n                \r\n               \r\n                 \r\n                 \r\n   \r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
