import type { Chain as WagmiChain } from "wagmi";

export const taikoWagmiChain: WagmiChain = {
  id: 167005,
  name: "Taiko L2",
  network: "",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.test.taiko.xyz"] },
    public: { http: ["https://rpc.test.taiko.xyz"] },
  },
  blockExplorers: {
    default: {
      name: "Main",
      url: "https://test.taikoscan.io",
    },
  },
};
