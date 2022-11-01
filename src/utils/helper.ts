import type { Subnet, FormData } from "./types";

function generateSubnets(data: FormData): Subnet[] {
  let subnets: Subnet[] = [];

  for (let i = 0; i < data.subnets; i++) {
    subnets.push({
      hostsNeeded: data.hosts[i],
      networkAddr: data.networkAddr,
      slash: data.cidrMask
    });
  }
  return subnets;
}

export { generateSubnets };
