'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWalletStore } from '@/store/useWalletStore';

export default function RoomPage() {
  const { address, isConnected } = useWalletStore();
  const router = useRouter();

  useEffect(() => {
    if (isConnected && address) {
      router.replace(`/room/${address}`);
    } else {
      router.replace('/');
    }
  }, [address, isConnected, router]);

  return (
    <div className="container mx-auto flex h-screen items-center justify-center px-4 py-8">
      Loading...
    </div>
  );
}
