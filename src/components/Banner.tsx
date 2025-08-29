import { Button } from '@/components/ui/button';
import type { BannerListResponse } from '@/lib/types/contents';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLang } from '../contexts/LangContext';

type BannerProps = {
	data: BannerListResponse;
};

export default function Banner({ data }: BannerProps) {
	const IMG_BASE_URL = import.meta.env.VITE_RESOURCE_URL;

	const { lang } = useLang();

	return (
		<div className="w-full overflow-hidden mb-6">
			<Swiper
				modules={[Autoplay, Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 3000 }}
				pagination={{
					type: 'fraction',
				}}
			>
				{data.map((banner) => (
					<SwiperSlide key={banner.id}>
						<div
							className="relative w-full h-[160px] sm:h-[180px] md:h-[200px]"
							onClick={() => {
								const link = lang === 'ko' ? banner.link.ko : banner.link.en;
								!banner.buttonText ? window.open(link, '_blank') : null;
							}}
						>
							<img
								src={`${IMG_BASE_URL}/${
									lang === 'ko' ? banner.image.ko : banner.image.en
								}`}
								alt={banner.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute left-0 top-0 z-10 flex flex-col justify-between h-full p-4 w-[75%]">
								{banner.description && (
									<div className="pt-2">
										<p className="text-md text-white">
											{lang === 'ko'
												? banner.description?.ko
												: banner.description?.en}
										</p>
									</div>
								)}
								{banner.buttonText && (
									<div className="absolute bottom-4">
										<Button
											variant="secondary"
											className="bg-white text-black rounded-full"
											onClick={() => {
												const link =
													lang === 'ko' ? banner.link.ko : banner.link.en;
												window.open(link, '_blank');
											}}
										>
											{lang === 'ko'
												? banner.buttonText.ko
												: banner.buttonText.en}
										</Button>
									</div>
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
