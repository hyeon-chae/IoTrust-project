import Banner from '@/components/Banner';
import usePresenter from './usePresenter';
import { FavoriteList } from '@/components/FavoriteList';
import { DAppList } from '@/components/DAppList';
import { BannerSkeleton } from '@/components/ui/skeletons/BannerSkeleton';
import ListSectionSkeleton from '@/components/ui/skeletons/ListSectionSkeleton';

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
				{isBannerListFetching || isBannerListError ? (
					<BannerSkeleton />
				) : (
					<Banner data={bannerList} />
				)}

				{isFavoriteListFetching || isFavoriteListError ? (
					<ListSectionSkeleton variant="card" rows={3} />
				) : (
					<FavoriteList data={favoriteList} />
				)}

				{isDAppListFetching || isDAppListError ? (
					<ListSectionSkeleton variant="card" rows={4} rightStub={false} />
				) : (
					<DAppList data={dappList} />
				)}
			</div>
		</div>
	);
}
