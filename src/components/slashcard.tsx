import React from "react";

const SlashCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-2xl mx-auto border">
      {/* Image */}
      <div className="w-full h-64 relative">
        <img
          src="https://api.ethos.network/api/v1/storage/images/1771507004868-ie4a0pga.jpg"
          alt="Slash Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category + Countdown */}
      <div className="flex items-center gap-3 px-4 py-2">
        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md flex items-center gap-2 text-sm font-semibold">
          <svg
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 60 60"
            className="inline-block"
          >
            <path d="M34.8 1H58v23.2H46.4V12.6H34.8V1ZM.3 9.5l8.2-8.2 49.2 49.2-8.2 8.2L.3 9.5Zm11.3 37.9h11.6V59H0V35.8h11.6v11.6Z" />
          </svg>
          <div className="flex items-center gap-2">
            <span>Slashing</span>
            <span>•</span>
            <span className="text-red-600 font-medium text-sm">47:26:54</span>
          </div>
        </span>
      </div>

      {/* Stats + Time */}
      <div className="flex items-center justify-between px-4">
        <span className="text-gray-500 text-sm">32m</span>
        <h1 className="text-lg font-bold text-gray-900">214 🔥</h1>
      </div>

      {/* Title */}
      <div className="px-4 py-2">
        <h3 className="text-md font-semibold">
          “The fantasy.top fraud: exposing the centralized scam. Travis”
        </h3>
      </div>

      {/* Authors */}
      <div className="flex items-center justify-start gap-4 px-4 py-2">
        <a
          href="https://app.ethos.network/profile/x/noheartlessss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://pbs.twimg.com/profile_images/2001226375827517440/IJAWWXEV_normal.jpg"
            alt="mikalaila"
            className="w-4 h-4 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">mikalaila</span>
        </a>

        <a
          href="https://app.ethos.network/profile/x/travisbickle0x"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1856804591641260032/u9EATyx0_normal.jpg"
            alt="travis bickle"
            className="w-4 h-4 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">travis bickle</span>
        </a>
      </div>

      {/* Content */}
      <div className="px-4 py-2 text-gray-600 text-sm line-clamp-6">
        <p>
          I am initiating a series of slashes against all individuals currently involved in
          the centralized management of the slow rug pull known as fantasy.top. I won't delve
          deeply into Travis's level of culpability; I've chosen to start with him, rather
          than the brothers, because Travis is the most public-facing figure in the team,
          and he knowingly shoulders the initial brunt of scrutiny.
        </p>
        <p>
          Below, I've attached a slash on the fantasy.top project itself, where you can review
          the materials provided by @PremiumSaltine_
        </p>
        <p>
          <a
            href="https://app.ethos.network/activity/slash/319/it-was-all-a-fantasy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://app.ethos.network/activity/slash/319/it-was-all-a-fantasy
          </a>
        </p>
        <p>
          I believe sufficient time has elapsed (over three months) to finally acknowledge
          that this isn't a mere string of unfortunate coincidences, but a deliberate scheme
          to extract funds under the pretext of separating the "company" treasury from the
          game's treasury - which, in reality, turned out to be a blatant deception of the community.
        </p>
      </div>

      {/* Read More */}
      <div className="px-4 py-1">
        <button className="text-blue-600 text-sm font-semibold hover:underline">
          Read more
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-start gap-3 px-4 py-3 border-t">
        <button className="bg-red-100 text-red-600 px-3 py-1 rounded-lg font-medium hover:bg-red-200 transition">
          Slash
        </button>
        <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-medium hover:bg-blue-200 transition">
          Defend
        </button>
      </div>
    </div>
  );
};

export default SlashCard;
