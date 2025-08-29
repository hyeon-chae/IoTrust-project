export type BannerData = {
	id: string;
	title: string;
	image: {
		ko: string;
		en: string;
	};
	description?: {
		ko: string;
		en: string;
	};
	link: {
		ko: string;
		en: string;
	};
	buttonText?: {
		ko: string;
		en: string;
	};
};

export type BannerListResponse = BannerData[];

export type FavoriteItem = {
	id: string;
	title: string;
	description: string;
	url: string;
	icon: string;
};

export type FavoriteListResponse = FavoriteItem[];

export type DAppItem = {
	id: string;
	title: string;
	icon: string;
	url: string;
	description: {
		ko: string;
		en: string;
	};
	supportedNetworks?: string[];
	conditions?: {
		lang?: string[];
		platform?: string[];
		env?: string[];
	};
};

export type DAppListResponse = DAppItem[];
