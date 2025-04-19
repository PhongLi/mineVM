'use client';

import { Fragment } from 'react';
import DialogWrapper from '@/components/dialogs/DialogWrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import useDialogStore from '@/store/useDialogStore';

export default function MobileMenu({ isOpen, setIsOpen, isWalletConnected }) {
  const pathname = usePathname();
  const { openProfile, openRefer } = useDialogStore();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      dialogClassName="lg:hidden"
      panelClassName="flex flex-col items-center justify-center p-6"
    >
      <div className="flex flex-grow flex-col items-center justify-center gap-6">
        <Link
          href="/whitepaper"
          className={clsx(
            'button button--nav w-full max-w-[240px] text-center',
            isActive('/whitepaper') && 'active'
          )}
          onClick={() => setIsOpen(false)}
        >
          Whitepaper
        </Link>

        <Link
          href="/room"
          className={clsx(
            'button button--nav w-full max-w-[240px] text-center',
            isActive('/room') && 'active'
          )}
          onClick={() => setIsOpen(false)}
        >
          Room
        </Link>

        <Link
          href="/marketplace"
          className={clsx(
            'button button--nav w-full max-w-[240px] text-center',
            isActive('/marketplace') && 'active'
          )}
          onClick={() => setIsOpen(false)}
        >
          Marketplace
        </Link>

        {isWalletConnected && (
          <>
            <button
              className="button button--nav w-full max-w-[240px] text-center"
              onClick={() => {
                openRefer();
                setIsOpen(false);
              }}
            >
              Refer a Friend
            </button>

            <button
              className="button button--nav w-full max-w-[240px] text-center"
              onClick={() => {
                openProfile();
                setIsOpen(false);
              }}
            >
              Profile
            </button>
          </>
        )}

        {!isWalletConnected && (
          <button
            className="button button--outline mt-4 w-full max-w-[240px] text-center"
            onClick={() => {
              console.log('Connect Wallet clicked');
              setIsOpen(false);
            }}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </DialogWrapper>
  );
}
