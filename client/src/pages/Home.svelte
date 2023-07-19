<script lang="ts">
  import { push } from "svelte-spa-router";
  import ConnectWallet from "../components/buttons/ConnectWallet.svelte";
  import { signer } from "../store/signer";
  import { showSwitchChainModal } from "../store/showSwitchChainModal";
  import Mint from "../components/buttons/Mint.svelte";
  import SwitchChainModal from "../components/modals/SwitchChainModal.svelte";
</script>

<div class="max-w-xl">
  <div class="card w-96 bg-base-100 shadow-xl p-4">
    <figure>
      <img
        src="./5.png"
        style="border-radius: 4rem;height:200px;width:200px;"
        class="p-4 max-w-sm shadow-2xl border-radius-2"
      />
    </figure>

    <h2
      class="card-title text-center mb-3"
      style="display:block; font-size:2rem;"
    >
      taikosontaiko
    </h2>
    <p class="mb-2" style="font-size:1.4rem;">
      they look like sad little ghosts or w/e idc
    </p>
    <h2
      class="card-title text-center mb-3"
      style="display:block; font-size:1.7rem;"
    >
      info:
    </h2>
    <p>- free mint on taiko l3 -</p>
    <p>- 1234 total -</p>
    <p>- holders receive them on taiko mainnet later -</p>
    <p>- MINTED OUT -</p>

    <div class="card-body">
      {#if !$signer}
        <ConnectWallet />
      {:else}
        <button class="btn" on:click={() => push("/viewForAddress")}
          >view ur taikos</button
        >
        <br />
      {/if}
    </div>
  </div>
</div>

<SwitchChainModal bind:isOpen={$showSwitchChainModal} />
