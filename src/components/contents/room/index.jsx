import React from 'react';
import MinerFactory from './MinerFactory';
import MiningStats from './MiningStats';
import MineRewards from './MineRewards';
import UserFactory from './UserFactory';

export default function RoomContent() {
  const miningData = {
    isMining: true,
    hashRate: '11 H/s',
    nextPayout: '12:34:56',
    networkHashRate: '700,000 H/s',
    percentOfNetwork: '0.0016%',
    minedAmount: '0.00 $MINE',
    powerUsed: 0,
    powerAvailable: 0,
  };

  return (
    <div className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Left column */}
      <div className="flex flex-col gap-6">
        <MinerFactory
          powerUsed={miningData.powerUsed}
          powerAvailable={miningData.powerAvailable}
        />

        <MiningStats
          isMining={miningData.isMining}
          hashRate={miningData.hashRate}
          nextPayout={miningData.nextPayout}
          networkHashRate={miningData.networkHashRate}
          percentOfNetwork={miningData.percentOfNetwork}
        />
        <MineRewards minedAmount={miningData.minedAmount} />
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-6">
        <UserFactory />
      </div>
    </div>
  );
}
