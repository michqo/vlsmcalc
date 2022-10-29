import { type Writable, writable } from "svelte/store";
import type { Subnet } from "./types";

const error: Writable<boolean> = writable(false);

const network: Writable<string> = writable("192.168.1.0");
const cidrMask: Writable<string> = writable("24");
const subnetsCount: Writable<string> = writable("3");
const hosts: Writable<string[]> = writable([]);

const subnets: Writable<Subnet[]> = writable([]);

export { error, network, cidrMask, subnetsCount, hosts, subnets };
