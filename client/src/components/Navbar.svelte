<script>
  import wallet from "../store/wallet";
  import nft from "../store/nft";
  import { push } from "svelte-spa-router";
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" on:click={() => push("/")}
      >taikosontaiko</a
    >
  </div>
  <div class="flex-none">
    {#if $nft}
      <img src={$nft.image} style="height:40px;width:40px;" />
    {/if}
  </div>
</div>
