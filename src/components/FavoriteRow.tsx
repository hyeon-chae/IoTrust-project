import { Bookmark } from 'lucide-react';
import type { FavoriteItem } from '@/lib/types/contents';
import { Button } from './ui/button';
import { useFavoritesStore } from '@/stores/favoritesStore';
import { useAlertDialog } from '@/components/providers/AlertDialogProvider';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

type FavoriteRowProps = {
	item: FavoriteItem;
};

export function FavoriteRow({ item }: FavoriteRowProps) {
	const IMG_BASE_URL = import.meta.env.VITE_RESOURCE_URL;
	const { t } = useTranslation();

	const { removeFavorites } = useFavoritesStore();

	const { showDialog, hideDialog } = useAlertDialog();

	const handleRemove = useCallback((id: string) => {
		showDialog({
			message: `${t('dapp_favorite_delete')}${t('dapp_favorite_title')}`,
			discription: t('dapp_favorite_delete_confirm'),
			actions: (
				<div className="flex gap-2 pt-4">
					<Button
						variant="outline"
						className="w-full"
						onClick={() => hideDialog()}
					>
						{t('button_cancel')}
					</Button>
					<Button
						className="w-full bg-primary text-white"
						onClick={() => {
							removeFavorites(id);
							hideDialog();
						}}
					>
						{t('button_confirm')}
					</Button>
				</div>
			),
		});
	}, []);

	return (
		<li className="py-3 border-b">
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
					<p
						className="text-[12px] text-muted-foreground truncate"
						onClick={() => window.open(item.url, '_blank')}
					>
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
						onClick={() => handleRemove(item.id)}
					>
						{t('dapp_favorite_delete')}
					</Button>
				</div>
			</div>
		</li>
	);
}
