<script lang="ts">
  import { taikoWagmiChain } from "../../domain/chain";
  import Modal from "./Modal.svelte";
  import { switchNetwork } from "@wagmi/core";

  export let isOpen: boolean = false;

  async function switchChain() {
    await switchNetwork({
      chainId: taikoWagmiChain.id,
    });
    isOpen = false;
  }
</script>

<Modal title="Switch Chain" bind:isOpen showXButton={false}>
  <div class="flex flex-col justify-between">
    <h2>U R ON THE WRONG NETWORK!!!</h2>
    <div class="text-center">
      <button class="btn" on:click={async () => await switchChain()}
        >click 2 go 2 taiko l3 in ur wallet</button
      >
    </div>
    <br />
  </div>
</Modal>
