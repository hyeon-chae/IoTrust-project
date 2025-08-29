import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ko from './locales/ko.json';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			ko: { translation: ko },
		},
		lng: 'ko', // 기본 언어
		fallbackLng: '.en', // 언어 없을 때 fallback

		interpolation: {
			escapeValue: false, // react에선 XSS 걱정 안해도 됨
		},
	});

export default i18n;
