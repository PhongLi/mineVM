'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import ProfileDialog from '@/components/dialogs/ProfileDialog';
import ReferDialog from '@/components/dialogs/ReferDialog';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export default function Navigation({ className = '' }) {
  const pathname = usePathname();
  const isActive = (p) => pathname === p;
  const { isConnected } = useAccount();

  return (
    <nav className={clsx('hidden items-center gap-6 lg:flex', className)}>
      <Link
        href="/whitepaper"
        className={clsx(
          'button button--nav',
          isActive('/whitepaper') && 'active'
        )}
      >
        Whitepaper
      </Link>
      <Link
        href="/room"
        className={clsx('button button--nav', isActive('/room') && 'active')}
      >
        Room
      </Link>
      <Link
        href="/marketplace"
        className={clsx(
          'button button--nav',
          isActive('/marketplace') && 'active'
        )}
      >
        Marketplace
      </Link>

      {isConnected ? (
        <>
          <ReferDialog />
          <ProfileDialog />
        </>
      ) : (
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <button
              onClick={openConnectModal}
              className="button button--outline whitespace-nowrap"
            >
              Connect Wallet
            </button>
          )}
        </ConnectButton.Custom>
      )}
    </nav>
  );
}
