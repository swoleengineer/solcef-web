const traits = [
  { category: "Background", value: "Aquamarine", rarity: "12%" },
  { category: "Fur", value: "Golden Brown", rarity: "8%" },
  { category: "Hat", value: "Shower Cap", rarity: "3%" },
  { category: "Eyes", value: "Sleepy", rarity: "5%" },
  { category: "Mouth", value: "Neutral", rarity: "22%" },
  { category: "Accessory", value: "Rubber Duck", rarity: "4%" },
];

function BathingApe() {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Background */}
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5ecfcf" />
          <stop offset="100%" stopColor="#3aa8b0" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#74c0fc" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#339af0" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="500" height="500" fill="url(#bgGrad)" />

      {/* Tiles on wall */}
      {[0, 1, 2, 3, 4].map((col) =>
        [0, 1, 2, 3].map((row) => (
          <rect
            key={`tile-${col}-${row}`}
            x={col * 100}
            y={row * 75}
            width="98"
            height="73"
            rx="3"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="2"
          />
        ))
      )}

      {/* Bathtub outer shell */}
      <path
        d="M 30 360 Q 30 480 80 490 L 420 490 Q 470 480 470 360 Z"
        fill="#e9ecef"
        stroke="#ced4da"
        strokeWidth="3"
      />
      {/* Bathtub rim */}
      <rect x="20" y="345" width="460" height="30" rx="15" fill="#f1f3f5" stroke="#ced4da" strokeWidth="2" />

      {/* Water */}
      <path
        d="M 35 375 Q 35 470 80 478 L 420 478 Q 465 470 465 375 Z"
        fill="url(#waterGrad)"
      />

      {/* Foam patches */}
      <ellipse cx="120" cy="375" rx="45" ry="14" fill="white" opacity="0.55" />
      <ellipse cx="370" cy="378" rx="35" ry="11" fill="white" opacity="0.5" />
      <ellipse cx="240" cy="372" rx="55" ry="16" fill="white" opacity="0.45" />

      {/* Bubbles above water */}
      <circle cx="140" cy="348" r="14" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
      <circle cx="165" cy="330" r="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <circle cx="360" cy="342" r="12" fill="none" stroke="white" strokeWidth="2" opacity="0.7" />
      <circle cx="385" cy="325" r="7" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <circle cx="250" cy="338" r="10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.55" />

      {/* Ape body (visible above water) */}
      <ellipse cx="250" cy="355" rx="85" ry="55" fill="#a0782a" />
      {/* Chest highlight */}
      <ellipse cx="250" cy="350" rx="50" ry="35" fill="#c8a060" opacity="0.6" />

      {/* Left arm draped over tub edge */}
      <path
        d="M 175 355 Q 140 340 95 355 Q 80 362 90 375 Q 100 388 115 375 Q 140 360 175 375 Z"
        fill="#a0782a"
      />
      {/* Left hand */}
      <ellipse cx="92" cy="368" rx="18" ry="14" fill="#c8a060" />

      {/* Right arm draped over tub edge */}
      <path
        d="M 325 355 Q 360 340 405 355 Q 420 362 410 375 Q 400 388 385 375 Q 360 360 325 375 Z"
        fill="#a0782a"
      />
      {/* Right hand */}
      <ellipse cx="408" cy="368" rx="18" ry="14" fill="#c8a060" />

      {/* Neck */}
      <rect x="218" y="285" width="64" height="55" rx="10" fill="#a0782a" />

      {/* Head */}
      <rect x="148" y="105" width="204" height="210" rx="48" fill="#a0782a" />

      {/* Left ear */}
      <ellipse cx="148" cy="215" rx="28" ry="34" fill="#a0782a" />
      <ellipse cx="148" cy="215" rx="17" ry="22" fill="#c8a060" />

      {/* Right ear */}
      <ellipse cx="352" cy="215" rx="28" ry="34" fill="#a0782a" />
      <ellipse cx="352" cy="215" rx="17" ry="22" fill="#c8a060" />

      {/* Inner face */}
      <ellipse cx="250" cy="240" rx="78" ry="88" fill="#c8a060" />

      {/* Left eye white */}
      <ellipse cx="213" cy="210" rx="22" ry="25" fill="white" />
      {/* Left iris */}
      <ellipse cx="213" cy="213" rx="13" ry="16" fill="#1a1a1a" />
      {/* Left pupil highlight */}
      <circle cx="217" cy="208" r="4.5" fill="white" />
      {/* Left sleepy eyelid */}
      <path d="M 191 205 Q 213 195 235 205" fill="#c8a060" />
      <rect x="191" y="196" width="44" height="14" rx="7" fill="#c8a060" />

      {/* Right eye white */}
      <ellipse cx="287" cy="210" rx="22" ry="25" fill="white" />
      {/* Right iris */}
      <ellipse cx="287" cy="213" rx="13" ry="16" fill="#1a1a1a" />
      {/* Right pupil highlight */}
      <circle cx="291" cy="208" r="4.5" fill="white" />
      {/* Right sleepy eyelid */}
      <rect x="265" y="196" width="44" height="14" rx="7" fill="#c8a060" />

      {/* Nose */}
      <ellipse cx="250" cy="255" rx="22" ry="14" fill="#8b6014" />
      <circle cx="241" cy="253" r="6" fill="#111" />
      <circle cx="259" cy="253" r="6" fill="#111" />
      <ellipse cx="250" cy="252" rx="8" ry="3" fill="#9a6e1a" opacity="0.5" />

      {/* Mouth - neutral bored expression */}
      <path
        d="M 225 282 Q 250 290 275 282"
        stroke="#7a5010"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Shower cap base */}
      <ellipse cx="250" cy="130" rx="108" ry="45" fill="#f783ac" />
      {/* Shower cap dome */}
      <ellipse cx="250" cy="108" rx="96" ry="58" fill="#f783ac" />
      {/* Cap elastic ruffle */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 148 + i * 28;
        return (
          <path
            key={`ruffle-${i}`}
            d={`M ${x} 143 Q ${x + 14} 162 ${x + 28} 143`}
            stroke="#e64980"
            strokeWidth="3"
            fill="none"
          />
        );
      })}
      {/* Cap polka dots */}
      {[
        [210, 95], [250, 80], [290, 95], [225, 115], [275, 118], [250, 105],
      ].map(([cx, cy], i) => (
        <circle key={`dot-${i}`} cx={cx} cy={cy} r="6" fill="white" opacity="0.6" />
      ))}
      {/* Bow on cap */}
      <ellipse cx="322" cy="112" rx="22" ry="13" fill="#e64980" transform="rotate(-25 322 112)" />
      <ellipse cx="344" cy="106" rx="22" ry="13" fill="#e64980" transform="rotate(25 344 106)" />
      <circle cx="333" cy="110" r="9" fill="#f783ac" />

      {/* Rubber duck */}
      <ellipse cx="380" cy="358" rx="30" ry="21" fill="#ffd43b" />
      <ellipse cx="378" cy="340" rx="20" ry="18" fill="#ffd43b" />
      {/* Duck bill */}
      <path d="M 395 337 Q 408 332 410 340 Q 408 347 395 344 Z" fill="#fd7e14" />
      {/* Duck eye */}
      <circle cx="382" cy="335" r="3.5" fill="#1a1a1a" />
      <circle cx="383" cy="334" r="1" fill="white" />
      {/* Duck wing */}
      <path
        d="M 360 352 Q 370 344 385 350 Q 370 358 360 352 Z"
        fill="#f0b800"
        opacity="0.8"
      />

      {/* Soap bar */}
      <rect x="108" y="352" width="52" height="22" rx="9" fill="white" opacity="0.92" />
      <rect x="112" y="358" width="44" height="10" rx="4" fill="#e9ecef" />
      <line x1="134" y1="356" x2="134" y2="372" stroke="#ced4da" strokeWidth="1.5" />

      {/* Faucet */}
      <rect x="228" y="330" width="44" height="18" rx="6" fill="#adb5bd" />
      <rect x="246" y="318" width="8" height="16" rx="3" fill="#868e96" />
      <ellipse cx="250" cy="318" rx="12" ry="5" fill="#868e96" />

      {/* Steam wisps */}
      <path
        d="M 200 100 Q 193 80 200 60 Q 207 40 200 20"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M 300 95 Q 307 75 300 55 Q 293 35 300 15"
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export default function NFTPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Bathing Ape Yacht Club
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">BAYC #4269</h1>
          <p className="text-gray-400">One of 10,000 unique Bathing Apes on the Ethereum blockchain</p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* NFT Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-emerald-900/30">
              <BathingApe />
            </div>
            <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              RARE
            </div>
          </div>

          {/* NFT Details */}
          <div className="space-y-5">
            {/* Price */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p className="text-gray-400 text-sm mb-1">Current Price</p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold">12.5 ETH</span>
                <span className="text-gray-400 text-sm">$38,250 USD</span>
              </div>
              <button className="mt-5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer">
                Buy Now
              </button>
              <button className="mt-2 w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer">
                Make Offer
              </button>
            </div>

            {/* Owner & Token */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Owned by</p>
                  <p className="font-semibold text-emerald-400">solcef.eth</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm mb-1">Token ID</p>
                  <p className="font-semibold">#4269</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm mb-1">Last Sale</p>
                  <p className="font-semibold">9.8 ETH</p>
                </div>
              </div>
            </div>

            {/* Traits */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h2 className="font-semibold mb-4">Traits</h2>
              <div className="grid grid-cols-2 gap-3">
                {traits.map((trait) => (
                  <div
                    key={trait.category}
                    className="bg-gray-800 hover:bg-gray-750 rounded-lg p-3 border border-gray-700 transition-colors"
                  >
                    <p className="text-emerald-400 text-xs font-medium uppercase tracking-wide">
                      {trait.category}
                    </p>
                    <p className="font-semibold text-sm mt-0.5">{trait.value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{trait.rarity} of apes</p>
                  </div>
                ))}
              </div>
            </div>

            {/* On-chain details */}
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 text-sm">
              <h2 className="font-semibold mb-4">Details</h2>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Contract Address", value: "0xBC4C...3e58" },
                  { label: "Token Standard", value: "ERC-721" },
                  { label: "Chain", value: "Ethereum" },
                  { label: "Rarity Rank", value: "#187 / 10,000", highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className="flex justify-between border-b border-gray-800 pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-400">{label}</span>
                    <span className={highlight ? "text-emerald-400 font-semibold" : "font-mono text-xs self-center"}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
