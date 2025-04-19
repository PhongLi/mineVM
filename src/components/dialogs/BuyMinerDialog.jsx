'use client';

import { DialogTitle } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import DialogWrapper from './DialogWrapper';

const minerData = [
  {
    id: 1,
    name: 'Miner 1',
    image: '/images/miners/miner1.svg',
    hashRate: '10 GH/S',
    power: '100 $MINE',
    energy: '2 Power',
  },
  {
    id: 2,
    name: 'Miner 2',
    image: '/images/miners/miner2.svg',
    hashRate: '20 GH/S',
    power: '200 $MINE',
    energy: '4 Power',
  },
  {
    id: 3,
    name: 'Miner 3',
    image: '/images/miners/miner3.svg',
    hashRate: '50 GH/S',
    power: '500 $MINE',
    energy: '10 Power',
  },
  {
    id: 4,
    name: 'Miner 4',
    image: '/images/miners/miner4.svg',
    hashRate: '100 GH/S',
    power: '1000 $MINE',
    energy: '20 Power',
  },
];

export default function BuyMinerDialog({ isOpen, setIsOpen }) {
  const [selectedMiner, setSelectedMiner] = useState(minerData[0]);

  function closeModal() {
    setIsOpen(false);
    setSelectedMiner(minerData[0]);
  }

  function handleMinerSelect(miner) {
    setSelectedMiner(miner);
  }

  function handleApprove() {
    // Handle purchase logic here
    console.log(`Purchasing ${selectedMiner.name}`);
    closeModal();
  }

  return (
    <DialogWrapper
      isOpen={isOpen}
      onClose={closeModal}
      panelClassName="frame w-full max-w-[860px] p-8 md:flex md:flex-col lg:max-w-[860px]"
    >
      <DialogTitle className="mb-4 text-center text-xl text-primary-500">
        Buy Miner
      </DialogTitle>

      <div className={clsx('grid w-full grid-cols-1 gap-4 md:grid-cols-2')}>
        {/* Left panel - Miner selection */}
        <div className="flex flex-col justify-between">
          {minerData.map((miner) => (
            <div
              key={miner.id}
              className={clsx(
                'flex cursor-pointer items-center px-8 py-4',
                selectedMiner.id === miner.id && 'bg-primary-900'
              )}
              onClick={() => handleMinerSelect(miner)}
            >
              <div className="relative mr-4 h-12 w-[72px]">
                <Image
                  src={miner.image}
                  alt={miner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className={clsx(
                  'text-xl',
                  selectedMiner.id === miner.id && 'text-primary-500'
                )}
              >
                {miner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right panel - Selected miner details */}
        <div
          className={clsx(
            'flex w-full flex-col items-center',
            'border border-primary-700',
            'md:order-1'
          )}
        >
          <h3 className="w-full px-2 py-5 text-center text-xl text-primary-700">
            {selectedMiner.name}
          </h3>

          <div
            className={clsx(
              'flex flex-col items-center justify-between border-t',
              'w-full border-primary-700 p-8'
            )}
          >
            <div className="relative mb-8 h-32 w-48">
              <Image
                src={selectedMiner.image}
                alt={selectedMiner.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="w-full text-center text-xl">
              <p>
                Hash rate: <strong>{selectedMiner.hashRate}</strong>
              </p>
              <p>
                Power: <strong>{selectedMiner.power}</strong>
              </p>
              <p>
                Energy: <strong>{selectedMiner.energy}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          type="button"
          className={clsx('button', 'button--outline')}
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="button"
          className={clsx('button', 'button--disabled')}
          onClick={handleApprove}
        >
          Approve
        </button>
      </div>
    </DialogWrapper>
  );
}
