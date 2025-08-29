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
