import { create } from 'zustand';

export const useWalletStore = create((set) => ({
  address: null,
  chainId: null,
  isConnected: false,
  setWallet: ({ address, chainId }) =>
    set({ address, chainId, isConnected: true }),
  disconnect: () => set({ address: null, chainId: null, isConnected: false }),
}));
