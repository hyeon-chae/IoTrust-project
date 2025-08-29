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
import { useQuery, useMutation } from '@tanstack/react-query';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { useEffect } from 'react';

export default function usePresenter() {
	const setFavoritesList = useFavoritesStore((state) => state.setFavoritesList);
	const { favorites } = useFavoritesStore();

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
	} = useQuery<DAppListResponse, Error>({
		queryKey: ['dappList'],
		queryFn: getDAppList,
		retry: 1,
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		// 즐겨찾기 데이터가 성공적으로 로드되었을 때 상태 업데이트
		if (isFavoriteListSuccess && Array.isArray(favoriteList)) {
			setFavoritesList(favoriteList);
		}
	}, [isFavoriteListSuccess]);

	return {
		bannerList: bannerList || [],
		isBannerListFetching,
		isBannerListError,
		favoriteList: favorites || [],
		isFavoriteListFetching,
		isFavoriteListError,
		dappList: dappList || [],
		isDAppListFetching,
		isDAppListError,
	};
}
