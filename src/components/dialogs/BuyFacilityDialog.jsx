'use client';

import { DialogTitle } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import DialogWrapper from './DialogWrapper';

export default function BuyFacilityDialog({ isOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  function handlePurchase() {
    // Handle purchase logic here
    console.log('Purchasing mining facility');
    closeModal();
  }

  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={closeModal}
      panelClassName="frame w-full max-w-[500px] p-8 flex flex-col items-center"
    >
      <DialogTitle className="mb-6 text-center text-2xl uppercase">
        PURCHASE YOUR FIRST
        <br />
        MINING FACTORY
      </DialogTitle>

      <div className="mb-6 w-full bg-primary-900 p-2">
        <h3 className="text-center text-xl text-white">
          Set up Miners in your factory
        </h3>
      </div>

      <div className="relative flex w-full items-center justify-center">
        <Image
          src="/images/facilities/facility1.png"
          alt="Mining Facility"
          width={238}
          height={160}
          className="object-contain"
        />
      </div>

      <div className="mb-8 w-full text-center">
        <p className="mb-2 text-xl">Price: 10 ETH</p>
        <p className="text-xl">Factory includes 1 free basic Miner</p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          className={clsx('button', 'button--outline')}
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="button"
          className={clsx('button', 'button--solid-red')}
          onClick={handlePurchase}
        >
          Purchase
        </button>
      </div>
    </DialogWrapper>
  );
}
