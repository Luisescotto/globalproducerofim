import SpainFlag from '@/i18n/Spain.astro';
import UnitedStatesFlag from '@/i18n/UnitedStates.astro';

export const languages = {
  en: 'English',
  es: 'Español',
};



export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About us',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre nosotros',
    'nav.products': 'Productos',
    'nav.contact': 'Contacto',
  },
} as const;


export const routes = {
	es: {
		vota: 'vota',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	}
};