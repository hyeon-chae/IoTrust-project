import {
	getBannerList,
	getFavoriteList,
	getDAppList,
} from '@/lib/api/contents';
import type {
	BannerListResponse,
	FavoriteListResponse,
	DAppListResponse,
} from '@/lib/types/contents';
import { useQuery } from '@tanstack/react-query';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { useEffect, useState } from 'react';
import { useLang } from '@/contexts/LangContext';
import getPlatform from '@/hooks/usePlatform';

export default function usePresenter() {
	const setFavoritesList = useFavoritesStore((state) => state.setFavoritesList);
	const { favorites } = useFavoritesStore();

	const { lang } = useLang();
	const ENV = import.meta.env.VITE_PUBLIC_ENV;
	const userAgent = getPlatform();

	const [serviceList, setServiceList] = useState<DAppListResponse>([]);
	const {
		data: bannerList,
		isFetching: isBannerListFetching,
		isError: isBannerListError,
	} = useQuery<BannerListResponse, Error>({
		queryKey: ['bannerList'],
		queryFn: getBannerList,
		retry: 1,
		refetchOnWindowFocus: false,
	});

	const {
		data: favoriteList,
		isFetching: isFavoriteListFetching,
		isError: isFavoriteListError,
		isSuccess: isFavoriteListSuccess,
	} = useQuery<FavoriteListResponse, Error>({
		queryKey: ['favoriteList'],
		queryFn: getFavoriteList,
		retry: 1,
		refetchOnWindowFocus: false,
	});

	const {
		data: dappList,
		isFetching: isDAppListFetching,
		isError: isDAppListError,
		isSuccess: isDAppListSuccess,
	} = useQuery<DAppListResponse, Error>({
		queryKey: ['dappList'],
		queryFn: getDAppList,
		retry: 1,
		refetchOnWindowFocus: false,
	});

	/** conditions에 따른 필터링 함수
	 ** lang, platform, env이 없을 경우 조건 무시
	 * */

	const filterDAppList = (
		dappList: DAppListResponse,
		lang: 'ko' | 'en',
		platform: 'ios' | 'android' | 'web',
		env: 'local' | 'dev' | 'stage' | 'prod'
	): DAppListResponse => {
		return dappList.filter((item) => {
			const conditions = item.conditions;

			// 조건이 아예 없는 경우
			if (!conditions) return true;

			const {
				lang: langCond,
				platform: platformCond,
				env: envCond,
			} = conditions;

			const isLangMatch =
				!langCond || langCond.length === 0 || langCond.includes(lang);
			const isPlatformMatch =
				!platformCond ||
				platformCond.length === 0 ||
				platformCond.includes(platform);
			const isEnvMatch =
				!envCond || envCond.length === 0 || envCond.includes(env);

			return isLangMatch && isPlatformMatch && isEnvMatch;
		});
	};

	// console.log('serviceList', lang, userAgent, ENV);

	useEffect(() => {
		// 즐겨찾기 데이터가 성공적으로 로드되었을 때 상태 업데이트
		if (isFavoriteListSuccess && Array.isArray(favoriteList)) {
			setFavoritesList(favoriteList);
		}
	}, [isFavoriteListSuccess]);

	// conditions에 따라 필터링
	useEffect(() => {
		if (isDAppListSuccess && Array.isArray(dappList)) {
			const filtered = filterDAppList(dappList, lang, userAgent, ENV);
			setServiceList(filtered);
		}
	}, [isDAppListSuccess]);

	return {
		bannerList: bannerList || [],
		isBannerListFetching,
		isBannerListError,
		favoriteList: favorites || [],
		isFavoriteListFetching,
		isFavoriteListError,
		dappList: serviceList || [],
		isDAppListFetching,
		isDAppListError,
	};
}
