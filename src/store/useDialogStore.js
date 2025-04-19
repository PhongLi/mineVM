import { create } from 'zustand';

const useDialogStore = create((set) => ({
  // Dialog states
  isProfileOpen: false,
  isReferOpen: false,

  // Actions
  openProfile: () => set({ isProfileOpen: true }),
  closeProfile: () => set({ isProfileOpen: false }),
  toggleProfile: () =>
    set((state) => ({ isProfileOpen: !state.isProfileOpen })),

  openRefer: () => set({ isReferOpen: true }),
  closeRefer: () => set({ isReferOpen: false }),
  toggleRefer: () => set((state) => ({ isReferOpen: !state.isReferOpen })),
}));

export default useDialogStore;
