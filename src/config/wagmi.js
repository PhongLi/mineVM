import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, bscTestnet, blastSepolia } from 'wagmi/chains';
import { http, createStorage, cookieStorage } from 'wagmi';

const supportedChains = [mainnet, sepolia, bscTestnet, blastSepolia];

export const wagmiConfig = getDefaultConfig({
  appName: 'MineVM',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains: supportedChains,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),
});
