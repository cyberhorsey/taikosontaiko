import axios from "axios";
import { BigNumber, ethers, Signer } from "ethers";
import NFT_ABI from "../abi/NFT_ABI";
import type { NFT } from "../domain/nft";
import { NFTType } from "../domain/nft";

export default async function fetchNfts(
  signer: Signer,
  address: string,
  contractAddress: string
): Promise<NFT[]> {
  const contract = new ethers.Contract(contractAddress, NFT_ABI, signer);

  const tokenIds: BigNumber[] = await contract.walletOfOwner(address);
  return await Promise.all(
    (tokenIds || []).map(async (tokenId: BigNumber) => {
      const uri = await contract.tokenURI(tokenId);
      const md = await axios.get(uri);
      const nft: NFT = {
        image: md.data.image,
        attributes: md.data.attributes,
        name: "#" + md.data.edition,
        nftType: NFTType.Ethereum,
      };
      return nft;
    })
  );
}
