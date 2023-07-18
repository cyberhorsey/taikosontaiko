<script lang="ts">
  import { onMount } from "svelte";
  import ConnectWallet from "../components/buttons/ConnectWallet.svelte";
  import NftView from "../components/NFTView.svelte";
  import type { NFT } from "../domain/nft";
  import { signer } from "../store/signer";
  import fetchNfts from "../utils/fetchNfts";

  let nfts: NFT[] = [];
  async function getTaikosForAddress() {
    const address = await $signer.getAddress();
    nfts = await fetchNfts($signer, address, import.meta.env.VITE_CONTRACT_URL);
  }
  onMount(async () => {
    await getTaikosForAddress();
  });
</script>

<div class="max-w-xl">
  <h1 class="mb-5 text-5xl font-bold">taikos on taiko</h1>
  {#if !$signer}
    <p class="mb-5">
      connect wallet first im not paying for rpc for u to search wallets lmao
    </p>
    <ConnectWallet />
  {:else if nfts}
    <NftView {nfts} />
  {/if}
</div>
