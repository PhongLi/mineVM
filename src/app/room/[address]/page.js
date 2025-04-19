'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWalletStore } from '@/store/useWalletStore';
import RoomContent from '@/components/contents/room';
import { CHAIN_ID } from '@/config/constants';

export default function RoomDetailPage({ params }) {
  const { address } = params;
  const { address: connectedAddress, isConnected, chainId } = useWalletStore();
  const router = useRouter();

  const isValidAddress =
    address && address.length === 42 && address.startsWith('0x');

  useEffect(() => {
    // If the wallet is not connected or the address is not valid, redirect to the homepage
    if (
      !isConnected ||
      !connectedAddress ||
      !isValidAddress ||
      chainId !== CHAIN_ID
    ) {
      router.replace('/');
      return;
    }

    // Check if the address in the URL matches the connected wallet address
    // Convert both addresses to lowercase to compare case-insensitively
    if (address.toLowerCase() !== connectedAddress.toLowerCase()) {
      router.replace(`/room/${connectedAddress}`);
    }
  }, [address, connectedAddress, isConnected, router, isValidAddress, chainId]);

  // If the wallet is not connected, display a loading state or notification
  if (
    !isConnected ||
    !connectedAddress ||
    !isValidAddress ||
    chainId !== CHAIN_ID
  ) {
    return <div className="container mx-auto px-4 py-8">Redirecting...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <RoomContent address={address} />
    </div>
  );
}
