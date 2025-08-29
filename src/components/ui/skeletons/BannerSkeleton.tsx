import { Skeleton } from '@/components/ui/skeleton';

export function BannerSkeleton() {
	return (
		<div className="w-full rounded-xl overflow-hidden shadow-md">
			<Skeleton className="h-[160px] sm:h-[180px] md:h-[200px] w-full" />
		</div>
	);
}
