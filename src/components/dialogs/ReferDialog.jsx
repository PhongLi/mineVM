'use client';

import DialogWrapper from '@/components/dialogs/DialogWrapper';
import { DialogTitle } from '@headlessui/react';
import useDialogStore from '@/store/useDialogStore';

export default function ReferDialog() {
  const { isReferOpen, openRefer, closeRefer } = useDialogStore();

  // Giả lập dữ liệu referral
  const referralData = {
    totalReferrals: 0,
    totalMineEarned: '0.00 $MINE',
    referralLink:
      'https://minetendo.money?ref=0x272b3c80439918b6e4f33e8064217118d1bc09',
  };

  return (
    <>
      <button type="button" onClick={openRefer} className="button button--nav">
        Refer a Friend
      </button>

      <DialogWrapper
        isOpen={isReferOpen}
        onClose={closeRefer}
        panelClassName="frame w-full max-w-md p-8"
      >
        <DialogTitle
          as="h2"
          className="mb-6 text-center text-2xl tracking-[0.5%] text-white"
        >
          REFER A FRIEND
        </DialogTitle>

        <div className="w-full">
          {/* Referral Info Section */}
          <div className="mb-4 bg-primary-900 p-4 backdrop-blur-sm">
            <p className="mb-2 text-base tracking-[0.5%] text-white">
              Earn more with 2-level referral system:
            </p>
            <ul className="mb-0 text-base tracking-[0.5%] text-white">
              <li className="mb-1">
                • F1 (Direct Invite): Earn 2% of your invitees Miner rewards
              </li>
              <li>
                • F2 (Indirect Invite): Earn 1% of Miner rewards from users
                invited by your F1s
              </li>
            </ul>
          </div>

          {/* Stats Section */}
          <div className="mb-4 bg-primary-900 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <p className="text-base tracking-[0.5%] text-white">
                  Total Referrals
                </p>
                <p className="text-xl font-bold text-[#D3114C]">
                  {referralData.totalReferrals}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-base tracking-[0.5%] text-white">
                  Total MINE Earned
                </p>
                <p className="text-xl font-bold text-[#D3114C]">
                  {referralData.totalMineEarned}
                </p>
              </div>
            </div>
          </div>

          {/* Referral Link Section */}
          <div className="mb-4">
            <p className="mb-1 text-base tracking-[0.5%] text-white">
              Your Referral Link
            </p>
            <div className="flex items-center justify-between bg-primary-900 p-2 backdrop-blur-sm">
              <p className="max-w-[80%] truncate text-xs tracking-[3.33%] text-white">
                {referralData.referralLink}
              </p>
              <button
                className="button button--outline button--small"
                onClick={() =>
                  navigator.clipboard.writeText(referralData.referralLink)
                }
              >
                Copy
              </button>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-center">
            <button
              className="button button--solid-red button--small"
              onClick={closeRefer}
            >
              Cancel
            </button>
          </div>
        </div>
      </DialogWrapper>
    </>
  );
}
