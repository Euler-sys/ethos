import React, { useState } from "react";
import LoginModal from "../pages/login"; // Make sure path is correct

interface FeedItem {
  id: number;
  author: string;
  authorAvatar: string;
  action: string;
  target: string;
  targetAvatar: string;
  time: string;
  title: string;
  amount: string;
  content: string;
  upvotes: number;
  comments: number;
}

const FeedPage: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const feedData: FeedItem[] = [
    {
      id: 1,
      author: "Dremond",
      authorAvatar: "https://i.pravatar.cc/100",
      action: "vouched for",
      target: "colorblock",
      targetAvatar: "https://i.pravatar.cc/101",
      time: "11h",
      title: "Exemplary OG in the space",
      amount: "0.05 ETH",
      content:
        "Have heard of her name a long time ago, finally got to know her a lil bit more through Ethos. A big big supporter of Ethos, her posts in the discord were fun to watch. Keep the vibes going!",
      upvotes: 37,
      comments: 0,
    },
    {
      id: 2,
      author: "phoenixscribe",
      authorAvatar: "https://i.pravatar.cc/102",
      action: "positively reviewed",
      target: "Buzz",
      targetAvatar: "https://i.pravatar.cc/103",
      time: "1h",
      title: "Incredible Ethos contributor",
      amount: "0.12 ETH",
      content:
        "Buz is an unofficial ethos worker imo. Guy built/builds a lot of helpful tools such as ethosians site where you can see a lot of data about ethos/profiles/xp. Apart from that whenever i hop into discord i see him discussing things/what he could build/how to do...",
      upvotes: 34,
      comments: 2,
    },
    {
      id: 3,
      author: "Zanac",
      authorAvatar: "https://i.pravatar.cc/102",
      action: "positively reviewed",
      target: "Hyperliquid",
      targetAvatar: "https://i.pravatar.cc/103",
      time: "4h",
      title: "One of the most compelling crypto trading platform in the current DeFi era",
      amount: "0.12 ETH",
      content:
        `I’ve tried several crypto futures trading platform, and in my opinion, Hyperliquid is one of the most comfortable to use right now.

The first thing I noticed was how fast the execution is. Order go through with almost no...`,
      upvotes: 20,
      comments: 12,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-xl font-bold mb-6">Feed</h1>

          {feedData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border shadow-sm space-y-4 cursor-pointer"
              onClick={() => setIsLoginOpen(true)} // open login modal on click
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.authorAvatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={item.author}
                  />
                  <div className="text-sm">
                    <span className="font-semibold">{item.author}</span>{" "}
                    <span className="text-gray-500">{item.action}</span>{" "}
                    <span className="font-semibold">{item.target}</span>
                  </div>
                </div>

                <span className="text-xs text-gray-400">{item.time}</span>
              </div>

              {/* Title + Amount */}
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <span className="font-semibold text-blue-600">{item.amount}</span>
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm line-clamp-3">{item.content}</p>

              {/* Bottom Actions */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <button className="flex items-center gap-1 hover:text-black transition">
                  ⬆ {item.upvotes}
                </button>
                <button className="flex items-center gap-1 hover:text-black transition">
                  💬 {item.comments}
                </button>
                <button className="hover:text-black transition">🔗 Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    

      {/* ✅ LOGIN MODAL */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default FeedPage;
