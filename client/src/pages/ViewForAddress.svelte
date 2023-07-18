<script lang="ts">
  import { onMount } from "svelte";
  import ConnectWallet from "../components/buttons/ConnectWallet.svelte";
  import NftView from "../components/NFTView.svelte";
  import type { NFT } from "../domain/nft";
  import { signer } from "../store/signer";
  import fetchNfts from "../utils/fetchNfts";
  import { ethers } from "ethers";
  import { GetAccountResult, getAccount } from "@wagmi/core";

  let nfts: NFT[] = [];
  async function getTaikosForAddress(signer: GetAccountResult) {
    if (!signer) return;
    const account = await getAccount();
    nfts = await fetchNfts(account.address, import.meta.env.VITE_CONTRACT_URL);
  }

  onMount(async () => {
    await getTaikosForAddress($signer);
  });

  $: getTaikosForAddress($signer).catch(console.error);
</script>

<div class="max-w-xl">
  <h1 class="mb-5 text-5xl font-bold">taikos on taiko</h1>
  {#if !$signer}
    <p class="mb-5">connect wallet first im not paying for rpc for u lmao</p>
    <ConnectWallet />
  {:else if nfts}
    <NftView {nfts} />
  {/if}
</div>
