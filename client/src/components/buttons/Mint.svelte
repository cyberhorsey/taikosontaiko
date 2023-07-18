<script lang="ts">
  import NFT_ABI from "../../abi/NFT_ABI";
  import { amount } from "../../store/amount";
  import { getNetwork, waitForTransaction, writeContract } from "@wagmi/core";
  import { taikoWagmiChain } from "../../domain/chain";

  let minted: boolean = false;
  let txHash: string = "";
  let message: string = "";
  let taikosImages: string[] = [];

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
    });
    minted = true;

    // todo: get the images u minted
  }
</script>

<div class="grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-4">
  {#each taikosImages as taikosImage}
    <img style="height: 80px; width: 80px;" src={taikosImage} />
  {/each}
</div>
{#if message}
  <h2 style="color:red;">{message}</h2>
{/if}

{#if $amount}
  there are this many minted: {$amount} out of 2222
{/if}

{#if !minted}
  <div class="btn btn-accent" on:click={async () => await mint()}>LFG</div>
{:else}
  u did it, nice one m8. u got a taikos. txHash: {txHash}.
  <br />
{/if}
