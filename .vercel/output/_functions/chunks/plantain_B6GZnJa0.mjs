import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Plátano","slug":"plantain","description":"Plátano, fruto alargado que se transforma, verde y almidonado cuando no ha madurado, dulce y dorado/negruzco al madurar. Base de la cocina caribeña, africana y latinoamericana, protagonista de tostones , mangú , asados o postres caramelizados. Cargado con potasio, vitamina A y carbohidratos energéticos, su textura densa lo convierte en ingrediente clave para snacks funcionales , desayunos premium o preparaciones innovadoras.","img":"plantain.jpg","category":"Tropical","packageType":"Unidades por caja 50","pounds":""};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/plantain.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n              \r\n              \r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                         \r\n                 \r\n                  \r\n                                 \r\n          \r\n   \r\n";
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
