import { getBannerList, getFavoriteList } from '@/lib/api/contents';
import type {
	BannerListResponse,
	FavoriteListResponse,
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

	useEffect(() => {
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
	};
}
