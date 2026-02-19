import React, { useRef, useState } from "react";
import LoginModal from "../pages/login";

import rabby from "../assets/rabby.jpg";
import rabby2 from "../assets/adan.jpg";
import rabby4 from "../assets/adan3.jpg";

interface BrokerItem {
  id: number;
  title: string;
  price: string;
  tag: string;
  avatar: string;
}

interface Profile {
  id: number;
  name: string;
  avatar: string;
  value: string;
  label: string;
}

const items: BrokerItem[] = [
  {
    id: 1,
    title: "Matching XP for Market Holdings XP",
    price: "Variable, max 1000xp",
    tag: "XP",
    avatar:
      "https://pbs.twimg.com/profile_images/1922516577506713600/xBQ4VvrJ_normal.jpg",
  },
  {
    id: 2,
    title: "50,000 Ethos XP",
    price: "$250",
    tag: "XP",
    avatar:
      "https://pbs.twimg.com/profile_images/1938644961500545024/VkNrIzDz_normal.jpg",
  },
  {
    id: 3,
    title: "40,000 Ethos XP",
    price: "$200",
    tag: "XP",
    avatar:
      "https://pbs.twimg.com/profile_images/1553144172957372419/grD--K1u_normal.jpg",
  },
  {
    id: 4,
    title: "Ethos Curator Program",
    price: "Performance based",
    tag: "Program",
    avatar:
      "https://pbs.twimg.com/profile_images/1986878850328932352/Ybzp_QKu_normal.jpg",
  },
];

const profiles: Profile[] = [
  {
    id: 1,
    name: "colorblock",
    avatar:
      "https://pbs.twimg.com/profile_images/1991308123609452545/IjnQYZ_w_normal.jpg",
    value: "0.05e",
    label: "vouched",
  },
  {
    id: 2,
    name: "Rabby Wallet",
    avatar: rabby,
    value: "70",
    label: "positive reviews",
  },
  {
    id: 3,
    name: "Espresso ☕️",
    avatar: rabby2,
    value: "65",
    label: "positive reviews",
  },
  {
    id: 4,
    name: "Base",
    avatar: rabby4,
    value: "81",
    label: "positive reviews",
  },
];

export const ReputationCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      {/* ===== PROFILE CAROUSEL ===== */}
      <div className="w-full py-2">
        <div className="max-w-6xl mx-auto px-4">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setIsLoginOpen(true)}
                className="min-w-[200px] cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col items-center text-center"
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-14 h-14 rounded-full mb-3 object-cover"
                />

                <span className="font-medium text-gray-900 truncate">
                  {profile.name}
                </span>

                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 60 60"
                    fill="currentColor"
                    className="text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 6.773v36.775L29.913 60h.174L60 43.548V6.773a59.67 59.67 0 0 1-12 5.28V0H36v14.504a60.726 60.726 0 0 1-12 0V0H12v12.053a59.67 5.67 0 0 1-12-5.28Zm12 5.28a59.713 59.713 0 0 0 12 2.45V32h12V14.504a59.713 59.713 0 0 0 12-2.451v24.4l-18 9.9-18-9.9v-24.4Z"
                    />
                  </svg>

                  <span className="font-semibold text-gray-900">
                    {profile.value}
                  </span>

                  <span>{profile.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ITEMS CAROUSEL ===== */}
      <div className="w-full py-2">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4"
        >
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setIsLoginOpen(true)}
              className="min-w-[260px] cursor-pointer bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <h3 className="font-medium text-gray-800 truncate">
                {item.title}
              </h3>

              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2 items-center">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {item.price}
                  </span>
                </div>

                <img
                  src={item.avatar}
                  alt={item.title}
                  className="w-6 h-6 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== LOGIN MODAL ===== */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
};
