enum WalletType {
  Ethereum,
  Solana,
}

type Wallet = {
  address: string;
  walletType: WalletType;
};

export { Wallet, WalletType };
