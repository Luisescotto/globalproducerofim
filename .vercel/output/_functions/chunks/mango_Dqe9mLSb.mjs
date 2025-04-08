import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Mango","slug":"mango","description":"Juicy, sweet, and vibrantly colored, our Dominican mangoes are cultivated under optimal tropical conditions. Known for their rich flavor and smooth texture, they are handpicked at peak ripeness to ensure premium quality. Perfect for retail, foodservice, or wholesale distribution.","img":"mango.jpg","category":"Tropical","packageType":"Box","pounds":"4-8 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/mango.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n            \r\n           \r\n                                                                                                                                                                                                                                                                                                     \r\n              \r\n                  \r\n                \r\n                  \r\n   \r\n";
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
