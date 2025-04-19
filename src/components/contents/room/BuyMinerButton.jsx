'use client';

import { useState } from 'react';
import BuyMinerDialog from '@/components/dialogs/BuyMinerDialog';

export default function BuyMinerButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function openBuyMinerDialog() {
    setIsDialogOpen(true);
  }

  return (
    <>
      <button
        onClick={openBuyMinerDialog}
        className="-sans rounded-md border-2 border-primary-500 px-6 py-2 text-primary-500 transition-colors hover:bg-primary-500/10"
      >
        Buy Miner
      </button>

      <BuyMinerDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
}
