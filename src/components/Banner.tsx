import { Button } from '@/components/ui/button';
import type { BannerListResponse } from '@/lib/types/contents';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type BannerProps = {
	data: BannerListResponse;
};

export default function Banner({ data }: BannerProps) {
	const IMG_BASE_URL = import.meta.env.VITE_RESOURCE_URL;

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
						<div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px]">
							<img
								src={`${IMG_BASE_URL}${banner.image.ko}`}
								alt={banner.title}
								className="object-cover opacity-20"
							/>
							<div className="absolute left-0 top-0 z-10 flex flex-col justify-between h-full p-4 w-[75%]">
								{banner.description && (
									<div className="pt-2">
										<p className="text-md">{banner.description?.ko}</p>
									</div>
								)}
								{banner.buttonText && (
									<div className="absolute bottom-4">
										<Button
											variant="secondary"
											className="bg-white text-black rounded-full"
										>
											구매하기
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
