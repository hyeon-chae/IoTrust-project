import Banner from '@/components/Banner';
import usePresenter from './usePresenter';
import { FavoriteList } from '@/components/FavoriteList';

export default function Home() {
	const {
		bannerList,
		isBannerListFetching,
		isBannerListError,
		favoriteList,
		isFavoriteListFetching,
		isFavoriteListError,
	} = usePresenter();

	return (
		<div className="space-y-6 bg-white min-h-screen max-w-[640px] mx-auto">
			<div className="">
				<Banner data={bannerList} />
				<FavoriteList data={favoriteList} />
			</div>
		</div>
	);
}
