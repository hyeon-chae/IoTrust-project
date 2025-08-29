import { Bookmark } from 'lucide-react';
import type { FavoriteItem } from '@/lib/types/contents';
import { Button } from './ui/button';

type FavoriteRowProps = {
	item: FavoriteItem;
	// onRemove?: (id: string) => void;
};

export function FavoriteRow({ item }: FavoriteRowProps) {
	const IMG_BASE_URL = import.meta.env.VITE_RESOURCE_URL;

	return (
		<li className="py-3">
			<div className="flex items-center gap-3">
				{/* 아이콘 */}
				<div className="w-12 h-12 rounded-lg bg-white shadow-sm border flex items-center justify-center shrink-0">
					<img
						src={`${IMG_BASE_URL}/${item.icon}`}
						alt={item.title}
						className="w-8 h-8 object-contain"
					/>
				</div>

				{/* 텍스트 */}
				<div className="min-w-0 flex-1">
					<p className="text-[15px] font-semibold leading-tight truncate">
						{item.title}
					</p>
					<p className="text-[12px] text-muted-foreground truncate">
						{item.url}
					</p>
				</div>

				{/* 우측 북마크/삭제 */}
				<div className="flex flex-col items-center justify-center w-10">
					<Bookmark className="w-5 h-5 text-gray-400" />

					<Button
						variant="ghost"
						size="sm"
						className="h-6 px-0 text-[11px] text-gray-400 bg-white"
						// onClick={() => onRemove?.(item.id)}
					>
						삭제
					</Button>
				</div>
			</div>
		</li>
	);
}
