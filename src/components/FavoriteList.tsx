import type { FavoriteListResponse } from '@/lib/types/contents';
import { FavoriteRow } from './FavoriteRow';
import { useTranslation } from 'react-i18next';

type FavoriteListProps = {
	data: FavoriteListResponse;
};

export function FavoriteList({ data }: FavoriteListProps) {
	const { t } = useTranslation();

	return (
		<section className="w-full px-4">
			{/* 섹션 타이틀_즐겨찾기*/}
			<h2 className="text-base font-semibold mb-4">
				{t('dapp_favorite_title')}
			</h2>

			{/* 구분선 */}
			<div className="h-px bg-gray-200 mb-1" />

			<ul className="">
				{data.map((item) => (
					<FavoriteRow key={item.id} item={item} />
				))}
			</ul>
		</section>
	);
}
