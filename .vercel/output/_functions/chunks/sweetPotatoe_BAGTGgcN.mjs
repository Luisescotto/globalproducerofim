import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Sweet Potato","slug":"sweet_potato","description":"A nutrient-dense root vegetable with vibrant orange flesh, offering a subtly sweet flavor and velvety texture. Versatile in both savory dishes (roasted, fries, casseroles) and sweet recipes (pies, muffins). Packed with beta-carotene, vitamins A and C, and fiber. Naturally gluten-free and lower on the glycemic index compared to regular potatoes. A global staple in cuisines from the Americas to Asia.","img":"sweetPotatoe.jpg","category":"Roots","packageType":"Box","pounds":"50 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/en/sweetPotatoe.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                   \r\n                  \r\n                                                                                                                                                                                                                                                                                                                                                                                                                              \r\n                     \r\n               \r\n                \r\n                 \r\n   \r\n";
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
