import React from 'react';

export default function MineRewards({ minedAmount = '0.00 $MINE' }) {
  return (
    <div className="frame flex w-full flex-col items-center justify-center p-8">
      <p className="mb-6 text-center text-base">YOU HAVE MINED {minedAmount}</p>

      <button className="button button--light-pink">Claim mined $MINE</button>
    </div>
  );
}
