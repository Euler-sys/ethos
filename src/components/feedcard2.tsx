import React, { useState } from "react";
import LoginModal from "../pages/login"; // Make sure path is correct
// import lo from '../assets/1771507004868-ie4a0pga.jpg'

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

const FeedPage2: React.FC = () => {
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
    authorAvatar: "https://i.pravatar.cc/104",
    action: "positively reviewed",
    target: "Hyperliquid",
    targetAvatar: "https://i.pravatar.cc/105",
    time: "4h",
    title: "One of the most compelling crypto trading platform in the current DeFi era",
    amount: "0.12 ETH",
    content:
      `I’ve tried several crypto futures trading platform, and in my opinion, Hyperliquid is one of the most comfortable to use right now.\n\nThe first thing I noticed was how fast the execution is. Order go through with almost no...`,
    upvotes: 20,
    comments: 12,
  },

  // 20 Random entries
  {
    id: 4,
    author: "Nova",
    authorAvatar: "https://i.pravatar.cc/106",
    action: "endorsed",
    target: "CryptoWave",
    targetAvatar: "https://i.pravatar.cc/107",
    time: "2h",
    title: "Next-gen NFT platform",
    amount: "0.08 ETH",
    content: "CryptoWave is innovating the NFT space with amazing collectibles.",
    upvotes: 15,
    comments: 1,
  },
  {
    id: 5,
    author: "Lumen",
    authorAvatar: "https://i.pravatar.cc/108",
    action: "vouched for",
    target: "BlockVerse",
    targetAvatar: "https://i.pravatar.cc/109",
    time: "5h",
    title: "Top DeFi project this week",
    amount: "0.15 ETH",
    content: "BlockVerse is revolutionizing decentralized finance.",
    upvotes: 22,
    comments: 3,
  },
  {
    id: 6,
    author: "Kairos",
    authorAvatar: "https://i.pravatar.cc/110",
    action: "positively reviewed",
    target: "MetaPlay",
    targetAvatar: "https://i.pravatar.cc/111",
    time: "30m",
    title: "Immersive metaverse experience",
    amount: "0.03 ETH",
    content: "MetaPlay's VR integration is truly next-level gaming experience.",
    upvotes: 9,
    comments: 0,
  },
  {
    id: 7,
    author: "Selene",
    authorAvatar: "https://i.pravatar.cc/112",
    action: "endorsed",
    target: "TokenVault",
    targetAvatar: "https://i.pravatar.cc/113",
    time: "12h",
    title: "Secure crypto wallet",
    amount: "0.05 ETH",
    content: "TokenVault is my go-to wallet for safe crypto management.",
    upvotes: 30,
    comments: 4,
  },
  {
    id: 8,
    author: "Orion",
    authorAvatar: "https://i.pravatar.cc/114",
    action: "vouched for",
    target: "ChainGuard",
    targetAvatar: "https://i.pravatar.cc/115",
    time: "3h",
    title: "Best smart contract auditing tool",
    amount: "0.07 ETH",
    content: "ChainGuard keeps smart contracts safe and secure.",
    upvotes: 18,
    comments: 2,
  },
  {
    id: 9,
    author: "Aria",
    authorAvatar: "https://i.pravatar.cc/116",
    action: "positively reviewed",
    target: "MoonFarm",
    targetAvatar: "https://i.pravatar.cc/117",
    time: "6h",
    title: "Yield farming made simple",
    amount: "0.09 ETH",
    content: "MoonFarm's yield opportunities are both safe and profitable.",
    upvotes: 24,
    comments: 1,
  },
  {
    id: 10,
    author: "Eros",
    authorAvatar: "https://i.pravatar.cc/118",
    action: "endorsed",
    target: "DeFiGuard",
    targetAvatar: "https://i.pravatar.cc/119",
    time: "8h",
    title: "Top security protocols in DeFi",
    amount: "0.11 ETH",
    content: "DeFiGuard ensures safe transactions and protects your assets.",
    upvotes: 28,
    comments: 5,
  },
  {
    id: 11,
    author: "Lyra",
    authorAvatar: "https://i.pravatar.cc/120",
    action: "vouched for",
    target: "PixelVault",
    targetAvatar: "https://i.pravatar.cc/121",
    time: "10h",
    title: "NFT vault with next-level security",
    amount: "0.06 ETH",
    content: "PixelVault stores NFTs securely and makes trading easy.",
    upvotes: 14,
    comments: 0,
  },
  {
    id: 12,
    author: "Atlas",
    authorAvatar: "https://i.pravatar.cc/122",
    action: "positively reviewed",
    target: "EthTrader",
    targetAvatar: "https://i.pravatar.cc/123",
    time: "1d",
    title: "Active trading platform",
    amount: "0.13 ETH",
    content: "EthTrader has one of the fastest execution speeds in crypto.",
    upvotes: 32,
    comments: 6,
  },
  {
    id: 13,
    author: "Vega",
    authorAvatar: "https://i.pravatar.cc/124",
    action: "endorsed",
    target: "SmartDeFi",
    targetAvatar: "https://i.pravatar.cc/125",
    time: "22h",
    title: "Automated DeFi strategies",
    amount: "0.04 ETH",
    content: "SmartDeFi makes DeFi investments easy for beginners.",
    upvotes: 19,
    comments: 2,
  },
  {
    id: 14,
    author: "NovaStar",
    authorAvatar: "https://i.pravatar.cc/126",
    action: "vouched for",
    target: "CryptoNest",
    targetAvatar: "https://i.pravatar.cc/127",
    time: "15h",
    title: "Community-driven token platform",
    amount: "0.08 ETH",
    content: "CryptoNest empowers communities with governance tokens.",
    upvotes: 21,
    comments: 3,
  },
  {
    id: 15,
    author: "Cleo",
    authorAvatar: "https://i.pravatar.cc/128",
    action: "positively reviewed",
    target: "ChainBridge",
    targetAvatar: "https://i.pravatar.cc/129",
    time: "7h",
    title: "Seamless blockchain bridge",
    amount: "0.05 ETH",
    content: "ChainBridge connects multiple blockchains effortlessly.",
    upvotes: 17,
    comments: 1,
  },
  {
    id: 16,
    author: "Zephyr",
    authorAvatar: "https://i.pravatar.cc/130",
    action: "endorsed",
    target: "TokenStream",
    targetAvatar: "https://i.pravatar.cc/131",
    time: "20h",
    title: "Real-time token analytics",
    amount: "0.09 ETH",
    content: "TokenStream tracks token activity and trends in real time.",
    upvotes: 23,
    comments: 4,
  },
  {
    id: 17,
    author: "Iris",
    authorAvatar: "https://i.pravatar.cc/132",
    action: "vouched for",
    target: "MetaDex",
    targetAvatar: "https://i.pravatar.cc/133",
    time: "9h",
    title: "Next-gen decentralized exchange",
    amount: "0.07 ETH",
    content: "MetaDex provides low fees and high liquidity for traders.",
    upvotes: 26,
    comments: 5,
  },
  {
    id: 18,
    author: "Orla",
    authorAvatar: "https://i.pravatar.cc/134",
    action: "positively reviewed",
    target: "BlockFiend",
    targetAvatar: "https://i.pravatar.cc/135",
    time: "14h",
    title: "Blockchain education hub",
    amount: "0.03 ETH",
    content: "BlockFiend teaches crypto concepts in a simple way.",
    upvotes: 11,
    comments: 0,
  },
  {
    id: 19,
    author: "Sol",
    authorAvatar: "https://i.pravatar.cc/136",
    action: "endorsed",
    target: "DeFiLab",
    targetAvatar: "https://i.pravatar.cc/137",
    time: "18h",
    title: "Innovative DeFi tools",
    amount: "0.06 ETH",
    content: "DeFiLab provides advanced tools for DeFi enthusiasts.",
    upvotes: 16,
    comments: 1,
  },
  {
    id: 20,
    author: "Lyric",
    authorAvatar: "https://i.pravatar.cc/138",
    action: "vouched for",
    target: "NFTPulse",
    targetAvatar: "https://i.pravatar.cc/139",
    time: "11h",
    title: "Trending NFT marketplace",
    amount: "0.12 ETH",
    content: "NFTPulse curates trending NFT collections daily.",
    upvotes: 29,
    comments: 3,
  },
  {
    id: 21,
    author: "Phoenix",
    authorAvatar: "https://i.pravatar.cc/140",
    action: "positively reviewed",
    target: "TokenForge",
    targetAvatar: "https://i.pravatar.cc/141",
    time: "2d",
    title: "Token minting platform",
    amount: "0.1 ETH",
    content: "TokenForge allows users to mint tokens with ease.",
    upvotes: 25,
    comments: 2,
  },
  {
    id: 22,
    author: "NovaLight",
    authorAvatar: "https://i.pravatar.cc/142",
    action: "endorsed",
    target: "CryptoAtlas",
    targetAvatar: "https://i.pravatar.cc/143",
    time: "3d",
    title: "Comprehensive crypto map",
    amount: "0.07 ETH",
    content: "CryptoAtlas visualizes all projects in the blockchain ecosystem.",
    upvotes: 19,
    comments: 3,
  },
  {
    id: 23,
    author: "OrionStar",
    authorAvatar: "https://i.pravatar.cc/144",
    action: "vouched for",
    target: "DeFiBridge",
    targetAvatar: "https://i.pravatar.cc/145",
    time: "6h",
    title: "Fast cross-chain solutions",
    amount: "0.08 ETH",
    content: "DeFiBridge enables smooth cross-chain token transfers.",
    upvotes: 21,
    comments: 2,
  },
  {
    id: 24,
    author: "Sirius",
    authorAvatar: "https://i.pravatar.cc/146",
    action: "positively reviewed",
    target: "NFTForge",
    targetAvatar: "https://i.pravatar.cc/147",
    time: "8h",
    title: "Create and sell NFTs",
    amount: "0.09 ETH",
    content: "NFTForge makes NFT creation simple and intuitive.",
    upvotes: 18,
    comments: 1,
  },
  {
    id: 25,
    author: "Aurora",
    authorAvatar: "https://i.pravatar.cc/148",
    action: "endorsed",
    target: "TokenFlow",
    targetAvatar: "https://i.pravatar.cc/149",
    time: "12h",
    title: "Automated token analytics",
    amount: "0.05 ETH",
    content: "TokenFlow helps track market trends and trading volumes.",
    upvotes: 22,
    comments: 2,
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

export default FeedPage2;
