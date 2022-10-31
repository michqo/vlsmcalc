import { type Writable, writable } from "svelte/store";
import type { Errors, Subnet } from "./types";

const errors: Writable<Errors> = writable({});

const network: Writable<string> = writable("192.168.1.0");
const cidrMask: Writable<string> = writable("24");
const subnetsCount: Writable<string> = writable("3");
const hosts: Writable<string[]> = writable([]);

const subnets: Writable<Subnet[]> = writable([]);

export { errors, network, cidrMask, subnetsCount, hosts, subnets };
