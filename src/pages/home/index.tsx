import Banner from '@/components/Banner';
import usePresenter from './usePresenter';

export default function Home() {
	const { bannerList, isBannerListFetching, isBannerListError } =
		usePresenter();

	return (
		<div className="space-y-6 bg-white min-h-screen max-w-[640px] mx-auto">
			<div className="">
				<Banner data={bannerList} />
			</div>
		</div>
	);
}
