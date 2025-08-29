import Banner from '@/components/Banner';
import usePresenter from './usePresenter';
import { FavoriteList } from '@/components/FavoriteList';
import { DAppList } from '@/components/DAppList';

export default function Home() {
	const {
		bannerList,
		isBannerListFetching,
		isBannerListError,
		favoriteList,
		isFavoriteListFetching,
		isFavoriteListError,
		dappList,
		isDAppListFetching,
		isDAppListError,
	} = usePresenter();

	return (
		<div className="space-y-6 bg-white min-h-screen max-w-[640px] mx-auto">
			<div className="space-y-8 pb-20">
				<Banner data={bannerList} />
				<FavoriteList data={favoriteList} />
				<DAppList data={dappList} />
			</div>
		</div>
	);
}
