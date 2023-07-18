<script lang="ts">
  import Nft from "./NFT.svelte";
  import type { NFT } from "../domain/nft";

  export let nfts: NFT[];
</script>

<div>
  {#if nfts && nfts.length}
    <div class="grid sm:grid-cols-4 gap-4 p-4">
      {#each nfts as nft}
        <Nft {nft} />
      {/each}
    </div>
  {/if}
</div>
