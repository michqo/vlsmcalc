import { type Writable, writable } from "svelte/store";

const network: Writable<string> = writable("");
const subnets: Writable<string> = writable("3");
const hosts: Writable<string[]> = writable([]);

export { network, subnets, hosts };
