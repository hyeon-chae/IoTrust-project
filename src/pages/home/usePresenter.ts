import { getBannerList, getFavoriteList } from '@/lib/api/contents';
import type {
	BannerListResponse,
	FavoriteListResponse,
} from '@/lib/types/contents';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function usePresenter() {
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
	} = useQuery<FavoriteListResponse, Error>({
		queryKey: ['favoriteList'],
		queryFn: getFavoriteList,
		retry: 1,
		refetchOnWindowFocus: false,
	});

	return {
		bannerList: bannerList || [],
		isBannerListFetching,
		isBannerListError,
		favoriteList: favoriteList || [],
		isFavoriteListFetching,
		isFavoriteListError,
	};
}
