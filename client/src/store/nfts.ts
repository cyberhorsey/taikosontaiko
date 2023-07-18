import { writable } from "svelte/store";
import type { NFT } from "../domain/nft";

const nfts = writable<NFT[]>();

export default nfts;
