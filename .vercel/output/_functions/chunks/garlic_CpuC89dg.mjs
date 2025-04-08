import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Ajo","slug":"garlic","description":"Ajo Dominicano, bulbo aromático y picante con dientes que potencian sabores en cocinas de todo el mundo. Usado en salsas, asados, salteados, remedios tradicionales y prácticas de salud natural. Fuente de alicina, vitamina B6 y antioxidantes, clave en preparaciones que exigen sabor y funcionalidad.","img":"garlic.jpg","category":"Roots","packageType":"Saco","pounds":"23 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/garlic.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n          \r\n            \r\n                                                                                                                                                                                                                                                                                                                       \r\n               \r\n               \r\n                 \r\n                 \r\n   \r\n";
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
