'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWalletStore } from '@/store/useWalletStore';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function HomePage() {
  const { isConnected, address } = useWalletStore();
  const router = useRouter();

  useEffect(() => {
    if (isConnected && address) {
      router.replace(`/room/${address}`);
    }
  }, [isConnected, address, router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-64 w-64 animate-pulse overflow-hidden rounded-full bg-primary-600">
        <div className="h-full w-full rounded-full bg-primary-600" />
      </div>
      <h1 className="text-4xl font-semibold md:text-6xl">
        Minetendo <span className="text-primary-500">Abstract Chain</span>
      </h1>
      <div className="mt-6">
        <ConnectButton.Custom>
          {({ account, chain, openConnectModal, mounted }) => {
            return (
              <div
                {...(!mounted && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!mounted || !account || !chain) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="button button--outline"
                      >
                        Connect Wallet To Start Mining
                      </button>
                    );
                  }
                  return null;
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  );
}
