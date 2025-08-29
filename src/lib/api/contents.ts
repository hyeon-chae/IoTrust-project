import { apiGet } from './common';
import type {
	BannerListResponse,
	FavoriteListResponse,
} from '../types/contents';

export async function getBannerList(): Promise<BannerListResponse> {
	const response = await apiGet<BannerListResponse>('/bannerList.json');
	return response;
}

export async function getFavoriteList(): Promise<FavoriteListResponse> {
	const response = await apiGet<FavoriteListResponse>('/favoriteList.json');
	return response;
}
