import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
	SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export type BottomSheetProps = {
	trigger: ReactNode;
	icon: string;
	title: string;
	description: string;
	url: string;
	children?: ReactNode;
};

export default function BottomSheet({
	trigger,
	icon,
	title,
	description,
	url,
	children,
}: BottomSheetProps) {
	const { t } = useTranslation();

	return (
		<Sheet>
			<SheetTrigger asChild>{trigger}</SheetTrigger>

			<SheetContent
				side="bottom"
				className="
          rounded-t-2xl p-0
          max-h-[95dvh] 
          min-h-[50dvh]
           flex flex-col
        "
			>
				<div className="px-6 pt-6 overflow-y-auto">
					<SheetHeader className="items-start text-left gap-2">
						{/* 아이콘 + 타이틀 */}
						<div className="flex items-center gap-3 pt-12 pb-4">
							<div className="size-12 rounded-2xl bg-white shadow-sm border flex items-center justify-center">
								<img src={icon} alt="" className="size-8 object-contain" />
							</div>

							<SheetTitle className="text-2xl font-extrabold leading-tight">
								{title}
							</SheetTitle>
						</div>

						<p className="text-sm text-muted-foreground mb-2">{url}</p>

						<p className="text-lg font-semibold">
							{t('bottom_sheet_go_description')}
						</p>

						<SheetDescription className="text-base leading-relaxed text-muted-foreground">
							{description}
						</SheetDescription>
					</SheetHeader>

					{/* 추가 본문(옵션) */}
					{children ? <div className="pt-4">{children}</div> : null}
				</div>

				{/* 버튼 */}
				{url && (
					<div
						className="sticky bottom-0 left-0 w-full bg-transparent"
						style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
					>
						<div className="p-3 text-center">
							<Button
								onClick={() => window.open(url, '_blank')}
								className="
                w-[180px] h-12 text-base
                rounded-full
              "
							>
								{t('bottom_sheet_go')}
							</Button>
						</div>
					</div>
				)}
			</SheetContent>
		</Sheet>
	);
}
