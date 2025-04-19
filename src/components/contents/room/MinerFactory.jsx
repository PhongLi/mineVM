'use client';
import React, { useState } from 'react';
import BuyMinerDialog from '@/components/dialogs/BuyMinerDialog';

export default function MinerFactory({ powerUsed = 0, powerAvailable = 0 }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="frame h-full w-full p-8">
        <div className="flex w-full items-center justify-between">
          <button className="text-lg font-bold text-primary-500 hover:text-primary-700">
            BUY MINER
          </button>
          <button className="text-lg font-bold hover:text-primary-700">
            FACTORY
          </button>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center">
          <p className="mb-6 text-center text-base">
            {powerUsed} Power used / {powerAvailable} Power
          </p>

          <button
            className="button button--solid-red"
            onClick={() => setIsDialogOpen(true)}
          >
            Buy Miner
          </button>
        </div>
      </div>
      <BuyMinerDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
}
