import { create } from "zustand";

interface UIState {
  isMobileMenuOpen: boolean;
  isRouteLoading: boolean;
  followedCreators: Record<string, boolean>;
  cartCount: number;

  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setIsRouteLoading: (loading: boolean) => void;
  toggleFollowCreator: (creatorId: string) => void;
  isCreatorFollowed: (creatorId: string) => boolean;
  setCartCount: (count: number) => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  isMobileMenuOpen: false,
  isRouteLoading: false,
  followedCreators: {},
  cartCount: 0,

  setMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setIsRouteLoading: (isRouteLoading) => set({ isRouteLoading }),
  toggleFollowCreator: (creatorId) =>
    set((state) => ({
      followedCreators: {
        ...state.followedCreators,
        [creatorId]: !state.followedCreators[creatorId],
      },
    })),
  isCreatorFollowed: (creatorId) => !!get().followedCreators[creatorId],
  setCartCount: (cartCount) => set({ cartCount }),
}));
