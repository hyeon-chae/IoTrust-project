import { Skeleton } from '@/components/ui/skeleton';

type Variant = 'list' | 'card'; // list = 구분선, card = 카드형 박스

type Props = {
	title?: boolean; // 섹션 제목 자리
	rows?: number; // 스켈레톤 행 수
	variant?: Variant; // 행 스타일
	showDivider?: boolean; // list일 때 상단 구분선
	rightStub?: boolean; // 우측 아이콘/버튼 자리
	avatarClassName?: string; // 아이콘 박스 크기 조절
};

export default function ListSectionSkeleton({
	title = true,
	rows = 3,
	variant = 'list',
	showDivider = true,
	rightStub = true,
	avatarClassName = 'w-12 h-12 rounded-xl',
}: Props) {
	return (
		<section>
			{title && (
				<div className="mb-2">
					<Skeleton className="h-5 w-24" />
				</div>
			)}

			{variant === 'list' && showDivider && (
				<div className="h-px bg-gray-200 mb-1" />
			)}

			<ul
				className={
					variant === 'card' ? 'space-y-3' : 'divide-y divide-gray-200'
				}
			>
				{Array.from({ length: rows }).map((_, i) => (
					<li
						key={i}
						className={
							variant === 'card' ? 'rounded-lg border shadow-sm p-3' : 'p-3'
						}
					>
						<div className="flex items-center gap-3">
							{/* 아이콘 자리 */}
							<Skeleton className={`${avatarClassName} shrink-0`} />
							{/* 텍스트 자리 */}
							<div className="min-w-0 flex-1 space-y-2">
								<Skeleton className="h-4 w-1/2" />
								<Skeleton className="h-3 w-4/5" />
							</div>
							{/* 우측 아이콘/버튼 자리 */}
							{rightStub && <Skeleton className="h-4 w-10 shrink-0" />}
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
