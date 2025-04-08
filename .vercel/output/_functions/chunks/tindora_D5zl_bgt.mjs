import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Tindora","slug":"tindora","description":"Small, round green gourd with a mild, slightly sweet flavor. Common in South Asian cuisines (curries, stir-fries, stuffed dishes). Low-calorie, high in fiber and vitamin C. Often paired with spices like turmeric, cumin, and garlic. A staple in Indian and Pakistani home cooking.","img":"tindora.webp","category":"Oriental","packageType":"Box","pounds":"30 pounds"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/products/tindora.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n              \r\n             \r\n                                                                                                                                                                                                                                                                                                   \r\n                 \r\n                  \r\n                \r\n                 \r\n   \r\n";
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
