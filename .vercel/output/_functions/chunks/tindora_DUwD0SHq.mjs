import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Tindora","slug":"tindora","description":"Tindora, fruto verde pequeño y redondo, con sabor suave y ligeramente dulce. Esencial en la cocina del sur de Asia (currys, woks, rellenos), se destaca por su bajo contenido calórico y alto aporte de fibra. Combina a la perfección con especias como cúrcuma, comino y ajo, siendo protagonista de platos caseros en India y Pakistán. Cultivada en RD con protocolos de exportación, garantiza frescura y adaptabilidad a fusiones culinarias modernas.","img":"tindora.jpg","category":"Oriental","packageType":"Caja","pounds":"30 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/tindora.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n              \r\n             \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                         \r\n                \r\n                  \r\n                 \r\n                 \r\n   \r\n";
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
