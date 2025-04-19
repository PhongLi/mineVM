'use client';
import { useEffect } from 'react';
import { useAccount, useConfig } from 'wagmi';
import { useWalletStore } from '@/store/useWalletStore';

export default function WalletManager() {
  const { address, isConnected } = useAccount();
  const config = useConfig();
  const setWallet = useWalletStore((s) => s.setWallet);
  const disconnect = useWalletStore((s) => s.disconnect);

  useEffect(() => {
    if (isConnected && address) {
      setWallet({
        address,
        chainId: config.chains[0].id,
      });
    } else {
      disconnect();
    }
  }, [isConnected, address, config, setWallet, disconnect]);

  return null;
}
