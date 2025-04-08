import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Calabaza","slug":"pumpkin","description":"Calabaza, variedad multifuncional de carne naranja vibrante, sabor dulce y terroso. Clave en preparaciones saladas (sopas, guisos, asados) y dulces (pay, postres). Carga nutricional con vitamina A , antioxidantes y fibra dietética. Cultivada bajo protocolos de exportación, garantiza consistencia para procesamiento en purés, harinas o snacks.","img":"pumpkin.jpg","category":"Roots","packageType":"Caja","pounds":"50 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/pumpkin.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n               \r\n             \r\n                                                                                                                                                                                                                                                                                                                                                                    \r\n                \r\n               \r\n                 \r\n                 \r\n   \r\n";
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
