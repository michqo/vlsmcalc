import { type Writable, writable } from "svelte/store";
import type { Subnet } from "./types";

const network: Writable<string> = writable("192.168.1.0/24");
const subnetsCount: Writable<string> = writable("3");
const hosts: Writable<string[]> = writable([]);

const subnets: Writable<Subnet[]> = writable([]);

export { network, subnetsCount, hosts, subnets };
