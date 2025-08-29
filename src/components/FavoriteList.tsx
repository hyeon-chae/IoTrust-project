import type { FavoriteListResponse } from '@/lib/types/contents';
import { FavoriteRow } from './FavoriteRow';

type FavoriteListProps = {
	data: FavoriteListResponse;
};

export function FavoriteList({ data }: FavoriteListProps) {
	return (
		<section className="w-full px-4">
			{/* 섹션 타이틀 */}
			<h2 className="text-base font-semibold mb-4">즐겨찾기</h2>

			{/* 구분선 */}
			<div className="h-px bg-gray-200 mb-1" />

			<ul className="border-b divide-y">
				{data.map((item) => (
					<FavoriteRow key={item.id} item={item} />
				))}
			</ul>
		</section>
	);
}
