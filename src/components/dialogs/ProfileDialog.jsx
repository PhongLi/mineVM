'use client';

import DialogWrapper from '@/components/dialogs/DialogWrapper';
import { DialogTitle } from '@headlessui/react';
import useDialogStore from '@/store/useDialogStore';
import { useAccount, useBalance, useDisconnect, useEnsName } from 'wagmi';
import { useWalletStore } from '@/store/useWalletStore';
import { middleEllipsis } from '@/utils';
import { CONTRACT_ADDRESSES } from '@/config/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { formatUnits } from 'viem';

export default function ProfileDialog() {
  const { isProfileOpen, openProfile, closeProfile } = useDialogStore();
  const { address, chain } = useAccount();
  const { data: ethBalance } = useBalance({ address });
  const { data: mineBalance } = useBalance({
    address,
    token: CONTRACT_ADDRESSES.token,
  });
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const disconnectWallet = useWalletStore((state) => state.disconnect);
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  const handleDisconnect = () => {
    disconnect();
    disconnectWallet();
    closeProfile();
    router.push('/');
  };

  const handleCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const formatBalance = (balanceData) => {
    if (!balanceData) return '0.00';
    return Number(formatUnits(balanceData.value, balanceData.decimals)).toFixed(
      balanceData.symbol === 'ETH' ? 4 : 2
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={openProfile}
        className="button button--nav"
      >
        Profile
      </button>

      <DialogWrapper
        isOpen={isProfileOpen}
        onClose={closeProfile}
        panelClassName="frame w-full max-w-md p-8"
      >
        <DialogTitle
          as="h2"
          className="mb-6 text-center text-2xl tracking-[0.5%]"
        >
          ACCOUNT
        </DialogTitle>

        <div className="w-full">
          <div className="mb-4">
            <p className="mb-1 text-base tracking-[0.5%]">Wallet Address:</p>
            <div className="flex items-center justify-between bg-primary-900 p-2 backdrop-blur-sm">
              <p className="text-xs tracking-[3.33%]">
                {ensName || (address ? middleEllipsis(address, 6) : '0x...')}
              </p>
              <button
                className="button button--outline button--small"
                onClick={handleCopyAddress}
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {chain && (
            <div className="mb-4 bg-primary-900 p-2 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <p className="text-base tracking-[0.5%]">Network</p>
                <p className="text-base tracking-[0.5%]">{chain.name}</p>
              </div>
            </div>
          )}

          <div className="mb-4 bg-primary-900 p-2 backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-base tracking-[0.5%]">ETH Balance</p>
              <p className="text-base tracking-[0.5%]">
                {formatBalance(ethBalance)} ETH
              </p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-base tracking-[0.5%]">MINE Balance</p>
              <p className="text-base tracking-[0.5%]">
                {formatBalance(mineBalance)} MINE
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <button
              className="button button--outline button--small"
              onClick={closeProfile}
            >
              Cancel
            </button>
            <button
              className="button button--solid-red button--small"
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </div>
        </div>
      </DialogWrapper>
    </>
  );
}
