<script lang="ts">
  import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
  } from "@web3modal/ethereum";
  import { Web3Modal } from "@web3modal/html";
  import { configureChains, createConfig } from "@wagmi/core";
  import { arbitrum, mainnet, polygon } from "@wagmi/core/chains";
  import { getAccount, getNetwork } from "@wagmi/core";
  import { signer } from "../../store/signer";
  import SwitchChainModal from "../modals/SwitchChainModal.svelte";
  import { taikoWagmiChain } from "../../domain/chain";
  import { showSwitchChainModal } from "../../store/showSwitchChainModal";

  const chains = [arbitrum, mainnet, polygon];
  const projectId = import.meta.env.VITE_WALLETCONNECT_ID;

  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);
  const web3modal = new Web3Modal({ projectId }, ethereumClient);

  async function openWeb3Modal() {
    await web3modal.openModal();
    const account = await getAccount();
    const network = await getNetwork();
    if (network.chain.id != taikoWagmiChain.id) {
      showSwitchChainModal.set(true);
    }
    signer.set(account);
  }
</script>

<div class="btn btn-secondary" on:click={openWeb3Modal}>connect ur wallet</div>
