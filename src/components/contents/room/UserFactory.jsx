'use client';
import BuyFacilityDialog from '@/components/dialogs/BuyFacilityDialog';
import { useState } from 'react';

export default function UserFactory() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className="frame flex h-full w-full flex-col items-center justify-center py-16">
        <p className="mb-8 text-center text-xl text-white">
          YOU DON'T HAVE MINER TO MINE!
        </p>

        <button
          className="button button--solid-red"
          onClick={() => setIsDialogOpen(true)}
        >
          Buy Factory
        </button>
      </div>
      <BuyFacilityDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
}
