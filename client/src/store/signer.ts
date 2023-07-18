import { writable } from "svelte/store";
import type { GetAccountResult } from "@wagmi/core";

export const signer = writable<GetAccountResult>();
