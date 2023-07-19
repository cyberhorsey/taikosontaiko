<script lang="ts">
  import { push } from "svelte-spa-router";
  import type { NFT } from "../domain/nft";
  import nftStore from "../store/nft";
  import NFT_ABI from "../abi/NFT_ABI";
  import { getAccount, writeContract } from "@wagmi/core";

  export let nft: NFT;

  let to: string = "0x";

  async function transfer() {
    const { hash } = await writeContract({
      address: import.meta.env.VITE_CONTRACT_URL,
      abi: NFT_ABI,
      functionName: "transferFrom",
      args: [getAccount().address, to, nft.name.replace("#", "")],
    });
  }
</script>

<div class="nft">
  {nft.name} <br />
  <img class="inline-block" src={nft.image} /> <br />
  <!-- <input type="text" bind:value={to} placeholder="0x..." />
  <br />
  <button on:click={transfer}>
    Transfer {nft.name}
    <br />
  </button> -->
</div>

<style>
  img {
    height: 100px;
    width: 100px;
  }

  .nft {
    margin: 0 auto;
  }
</style>
