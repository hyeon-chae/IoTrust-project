import type { DAppListResponse } from '@/lib/types/contents';
import { DAppRaw } from './DAppRaw';
import { useTranslation } from 'react-i18next';

type DAppListProps = {
	data: DAppListResponse;
};

export function DAppList({ data }: DAppListProps) {
	const { t } = useTranslation();

	return (
		<section className="w-full px-5">
			{/* 섹션 타이틀_목록*/}
			<h2 className="text-base font-semibold mb-4">{t('dapp_list_title')}</h2>

			{/* 구분선 */}
			<div className="h-px bg-gray-200 mb-1" />

			<ul className="">
				{data.map((item) => (
					<DAppRaw key={item.id} item={item} />
				))}
			</ul>
		</section>
	);
}
