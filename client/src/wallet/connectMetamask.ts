import { ethers } from "ethers";
import NFT_ABI from "../abi/NFT_ABI";
import { WalletType } from "../domain/wallet";
import { amount } from "../store/amount";
import { signer } from "../store/signer";
import wallet from "../store/wallet";

type EthereumWindow = {
  ethereum: any; // todo: get rid of any typing
};

async function connectMetamask() {
  const provider = new ethers.providers.Web3Provider(
    (window as any as EthereumWindow).ethereum
  );

  const accounts = await provider.send("eth_requestAccounts", []);
  const providedAccount: string = accounts[0];
  wallet.set({
    walletType: WalletType.Ethereum,
    address: providedAccount,
  });

  signer.set(provider.getSigner());

  const contract = new ethers.Contract(
    import.meta.env.VITE_CONTRACT_URL,
    NFT_ABI,
    provider
  );

  const amt = await contract.totalSupply();
  amount.set(amt);
}

export default connectMetamask;
