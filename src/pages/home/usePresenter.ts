import { getBannerList } from '@/lib/api/contents';
import type { BannerListResponse } from '@/lib/types/contents';
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

	console.log(bannerList);

	return {
		bannerList: bannerList || [],
		isBannerListFetching,
		isBannerListError,
	};
}
