import { writable } from "svelte/store";
import type { NFT } from "../domain/nft";

const nft = writable<NFT>();

export default nft;
