<script lang="ts">
  import NFT_ABI from "../../abi/NFT_ABI";
  import { amount } from "../../store/amount";
  import {
    getAccount,
    getNetwork,
    waitForTransaction,
    writeContract,
    readContract,
  } from "@wagmi/core";
  import { taikoWagmiChain } from "../../domain/chain";
  import axios from "axios";
  import { NFT } from "../../domain/nft";
  import fetchNfts from "../../utils/fetchNfts";
  import Nft from "../NFT.svelte";

  let minted: boolean = false;
  let txHash: string = "";
  let message: string = "";
  let taikosImages: string[] = [];
  let nfts: NFT[] = [];

  async function mint() {
    const network = getNetwork();
    if (network.chain.id !== taikoWagmiChain.id) {
      message =
        "On wrong chain, go to ur metamask pr w/e wallet and change it to taiko L3 then refresh the page cause i didnt do the .on accounts changed thing, fml";
      return;
    }

    const { hash } = await writeContract({
      address: import.meta.env.VITE_CONTRACT_URL,
      abi: NFT_ABI,
      functionName: "mint",
      args: [1],
    });
    txHash = hash;
    await waitForTransaction({
      confirmations: 1,
      hash: txHash as `0x${string}`,
      timeout: 10000000000,
    });
    minted = true;

    // todo: get the images u minted
    const tokenIds = await readContract({
      address: import.meta.env.VITE_CONTRACT_URL,
      abi: NFT_ABI,
      functionName: "walletOfOwner",
      args: [getAccount().address],
    });

    tokenIds.map((tokenID) => {
      taikosImages.push(
        `https://arweave.net/bTsUb75y4wcv7McD8-5ffdEpazhrxZyVCwTH7EE1Vy0/${tokenID}.png`
      );
    });

    nfts = await fetchNfts(
      getAccount().address,
      import.meta.env.VITE_CONTRACT_URL
    );
  }
</script>

{#if message}
  <h2 style="color:red;">{message}</h2>
{/if}

{#if $amount}
  there are this many minted: {$amount} out of 2222
{/if}

{#if !minted}
  <div class="btn btn-accent" on:click={async () => await mint()}>LFG</div>
{:else}
  <div>
    {#if nfts && nfts.length}
      <div class="grid sm:grid-cols-4 gap-4 p-4">
        {#each nfts as nft}
          <Nft {nft} />
        {/each}
      </div>
    {/if}
  </div>

  u did it, nice one m8. u got a taikos. txHash: {txHash}.
  <br />
{/if}
