import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import i18n from '../i18n';

type Lang = 'ko' | 'en';
type LangContextValue = {
	lang: Lang;
	setLang: (next: Lang) => void;
};

const LangContext = createContext<LangContextValue>({
	lang: 'ko',
	setLang: () => {},
});

function normalizeLang(input?: string): Lang {
	const lower = (input ?? '').toLowerCase();
	if (lower.startsWith('ko')) return 'ko';
	return 'en';
}

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [lang, setLang] = useState<Lang>('ko');

	useEffect(() => {
		// 브라우저에서 한 번만 감지
		const browserLang = normalizeLang(
			navigator.language || (navigator as any).userLanguage
		);
		// i18n에 적용
		i18n.changeLanguage(browserLang);
		setLang(browserLang);
	}, []);

	const value = useMemo(
		() => ({
			lang,
			setLang: (next: Lang) => {
				i18n.changeLanguage(next);
				setLang(next);
			},
		}),
		[lang]
	);

	return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
