import type { DAppItem } from '@/lib/types/contents';

import { useTranslation } from 'react-i18next';

type DAppRawProps = {
	item: DAppItem;
};

export function DAppRaw({ item }: DAppRawProps) {
	const IMG_BASE_URL = import.meta.env.VITE_RESOURCE_URL;
	const { t } = useTranslation();

	return (
		<li
			className="py-3 border-b"
			onClick={() => window.open(item.url, '_blank')}
		>
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
						{item.description.ko}
					</p>
				</div>
			</div>
		</li>
	);
}
