import { apiGet } from './common';
import type { BannerListResponse } from '../types/contents';

export async function getBannerList(): Promise<BannerListResponse> {
	const response = await apiGet<BannerListResponse>('/bannerList.json');
	return response;
}
