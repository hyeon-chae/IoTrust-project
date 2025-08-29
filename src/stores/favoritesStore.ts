import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FavoriteItem } from '@/lib/types/contents';

interface FavoritesState {
	favorites: FavoriteItem[];
	addFavorites: (item: FavoriteItem) => void;
	removeFavorites: (id: string) => void;
	toggleFavorites: (item: FavoriteItem) => void;
	isFavoritesed: (id: string) => boolean;
	clearAll: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
	persist(
		(set, get) => ({
			favorites: [],
			addFavorites: (item) =>
				set((state) => ({ favorites: [...state.favorites, item] })),
			removeFavorites: (id) =>
				set((state) => ({
					favorites: state.favorites.filter((b) => b.id !== id),
				})),
			toggleFavorites: (item) => {
				const exists = get().favorites.some((b) => b.id === item.id);
				if (exists) {
					get().removeFavorites(item.id);
				} else {
					get().addFavorites(item);
				}
			},
			isFavoritesed: (id) => get().favorites.some((b) => b.id === id),
			clearAll: () => set({ favorites: [] }),
		}),
		{
			name: 'Favorites-storage',
		}
	)
);
