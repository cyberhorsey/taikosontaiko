import { writable } from "svelte/store";
import type { Wallet } from "../domain/wallet";

const wallet = writable<Wallet>();

export default wallet;
