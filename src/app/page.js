'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWalletStore } from '@/store/useWalletStore';

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
      <div className="h-12 w-12 overflow-hidden rounded-full bg-primary-600">
        <div className="h-full w-full rounded-full bg-white" />
      </div>
      <h1 className="text-4xl font-semibold md:text-6xl">
        Minetendo <span className="text-primary-500">Abstract Chain</span>
      </h1>
      <button className="button button--outline mt-6">
        Connect Wallet To Start Mining
      </button>
    </div>
  );
}
