import type { Chain as WagmiChain } from "wagmi";

export const taikoWagmiChain: WagmiChain = {
  id: 167006,
  name: "Eldfell L3",
  network: "",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.l3test.taiko.xyz"] },
    public: { http: ["https://rpc.l3test.taiko.xyz"] },
  },
  blockExplorers: {
    default: {
      name: "Main",
      url: "https://explorer.l3test.taiko.xyz",
    },
  },
};
