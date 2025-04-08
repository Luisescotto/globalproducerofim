import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_DBIoaZhA.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "";

				const frontmatter = {"title":"Chile Tailandés","slug":"thai_chilli","description":"Chile Tailandés, variedad pequeña y picante (50,000–100,000 SHU en la escala Scoville), con un sabor frutal e intenso que define platos asiáticos. Esencial en currys, salsas y sopas del sudeste asiático. Concentra vitamina C y antioxidantes , aportando carácter a preparaciones saladas sin sacrificar autenticidad.","img":"thaiChilli.jpg","category":"Oriental","packageType":"Caja","pounds":"30 libras"};
				const file = "C:/Users/luise/Documents/Astro/globalproducerofim/src/content/es/thaiChilli.md";
				const url = undefined;
				function rawContent() {
					return "   \r\n                      \r\n                 \r\n                                                                                                                                                                                                                                                                                                                                       \r\n                   \r\n                  \r\n                 \r\n                 \r\n   \r\n";
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
