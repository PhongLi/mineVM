import React from 'react';

export default function MiningStats({
  isMining = false,
  hashRate = '0 H/s',
  nextPayout = '00:00:00',
  networkHashRate = '0 H/s',
  percentOfNetwork = '0%',
}) {
  return (
    <div className="frame w-full p-8">
      <div className="mb-4 flex w-full items-center justify-between">
        <h2 className="text-lg font-bold text-primary-500">YOUR MINING</h2>
        <h2 className="text-lg font-bold text-white">ANALYTICS</h2>
      </div>

      <div className="flex w-full flex-col">
        <p className="mb-2 text-base text-white">
          YOU ARE MINING <span className="text-primary-500">{hashRate}</span> A
          DAY
        </p>
        <p className="mb-2 text-base text-white">
          YOUR NEXT PAYOUT IS IN{' '}
          <span className="text-primary-500">{nextPayout}</span>
        </p>
        <p className="mb-2 text-base text-white">
          NETWORK IS CURRENTLY MINING{' '}
          <span className="text-primary-500">{networkHashRate}</span>
        </p>
        <p className="mb-2 text-base text-white">
          YOU HAVE <span className="text-primary-500">{percentOfNetwork}</span>{' '}
          OF THE TOTAL NETWORK HASH RATE
        </p>
      </div>
    </div>
  );
}
