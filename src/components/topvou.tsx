import React, { useState } from "react";
import LoginModal from "../pages/login";

interface Vouch {
  id: number;
  name: string;
  avatar: string;
  amount: string;
}

const vouches: Vouch[] = [
  { id: 1, name: "Tengen", avatar: "https://pbs.twimg.com/profile_images/1964391156122292225/mlWmZ8c2_normal.jpg", amount: "0.05e" },
  { id: 2, name: "poezdec 🫵😹", avatar: "https://pbs.twimg.com/profile_images/1960323354394554368/bFcD2_Zg_normal.jpg", amount: "0.05e" },
  { id: 3, name: "colorblock", avatar: "https://pbs.twimg.com/profile_images/1991308123609452545/IjnQYZ_w_normal.jpg", amount: "0.05e" },
  { id: 4, name: "Gino", avatar: "https://pbs.twimg.com/profile_images/1744705289499365376/KRsP_sIX_normal.jpg", amount: "0.025e" },
  { id: 5, name: "Ethos", avatar: "https://pbs.twimg.com/profile_images/2014430600669675520/-jUwNNAe_normal.jpg", amount: "0.02e" },
  { id: 6, name: "Biti8", avatar: "https://pbs.twimg.com/profile_images/2017346556425289728/gJdBPdYB_normal.jpg", amount: "0.012e" },
  { id: 7, name: "Zenith", avatar: "https://pbs.twimg.com/profile_images/2016292902838603776/NMSNimnI_normal.jpg", amount: "0.01e" },
  { id: 8, name: "Gemarcuan", avatar: "https://pbs.twimg.com/profile_images/1823243535950462976/Z9WSVzsN_normal.jpg", amount: "0.01e" },
];

export const TopVouchesMarquee: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const VouchCard = (vouch: Vouch, key: string | number) => (
    <div
      key={key}
      onClick={() => setIsLoginOpen(true)}
      className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg shadow-sm min-w-max cursor-pointer hover:scale-105 transition-transform"
    >
      <img
        src={vouch.avatar}
        alt={vouch.name}
        className="w-6 h-6 rounded-full"
        referrerPolicy="no-referrer"
      />
      <span className="font-medium text-gray-800 text-sm">
        {vouch.name}
      </span>
      <span className="flex items-center gap-1 text-yellow-500 font-semibold text-xs">
        <svg
          width="12"
          height="12"
          fill="currentColor"
          viewBox="0 0 60 60"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.773v36.775L29.913 60h.174L60 43.548V6.773a59.67 59.67 0 0 1-12 5.28V0H36v14.504a60.726 60.726 0 0 1-12 0V0H12v12.053a59.67 5.67 0 0 1-12-5.28Zm12 5.28a59.713 59.713 0 0 0 12 2.45V32h12V14.504a59.713 59.713 0 0 0 12-2.451v24.4l-18 9.9-18-9.9v-24.4Z"
          />
        </svg>
        {vouch.amount}
      </span>
    </div>
  );

  return (
    <>
      <div className="overflow-hidden relative w-full bg-gray-50 py-2">
        <div className="flex animate-marquee whitespace-nowrap gap-3">
          {vouches.map((vouch) => VouchCard(vouch, vouch.id))}
          {vouches.map((vouch) => VouchCard(vouch, `dup-${vouch.id}`))}
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-flex;
              gap: 0.75rem;
              animation: marquee 30s linear infinite;
            }
          `}
        </style>
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
};
