import type { Subnet, FormData, NetworkInfo } from "./types";

const encodeIP = (ip: string): string =>
  ip
    .split(".")
    .map(
      (octet) =>
        "0".repeat(8 - (+octet).toString(2).length) + (+octet).toString(2)
    )
    .join("");

const decodeIP = (ip: string): string => {
  const buffer = new Array(4).fill(0);
  const ip32bit = "0".repeat(32 - ip.length) + ip;
  return buffer
    .map((_, index) => parseInt(ip32bit.substr(index * 8, 8), 2))
    .join(".");
};

const getNetworkAddress = (encodedIP: string, cidrMask: number): string => {
  const a = encodedIP
    .split("")
    .map((bit, index) => (index < cidrMask ? bit : "0"))
    .join("");
  return decodeIP(a);
};

const getBroadcastAddress = (encodedIP: string, cidrMask: number): string => {
  const a = encodedIP
    .split("")
    .map((bit, index) => (index < cidrMask ? bit : "1"))
    .join("");
  return decodeIP(a);
};

const getTotalHosts = (
  encodedNetwork: string,
  encodedBroadcast: string
): number => {
  return parseInt(encodedBroadcast, 2) - parseInt(encodedNetwork, 2) + 1;
};
const getUsableHosts = (numberOfHost: number) =>
  numberOfHost === 1 ? 0 : numberOfHost - 2;

const getUsableIPRange = (
  usableNumberOfHost: number,
  encodedNetwork: string,
  encodedBroadcast: string
): string => {
  if (usableNumberOfHost === 0) {
    return "None";
  }

  const parsedNetwork = parseInt(encodedNetwork, 2);
  const parsedBroadcast = parseInt(encodedBroadcast, 2);
  return (
    // TODO: Make an algorithm to find the next subnet
    decodeIP((parsedNetwork + 1).toString(2)) +
    " - " +
    decodeIP((parsedBroadcast - 1).toString(2))
  );
};

const getNextSubnet = (encodedBroadcast: string): string => {
  const nextSubnet = (parseInt(encodedBroadcast, 2) + 1).toString(2);
  return decodeIP(nextSubnet);
};

const getCidrMask = (usableHosts: number): number => {
  for (let i = 32; i > 0; i--) {
    const hosts = Math.pow(2, 32 - i);
    if (hosts - 2 >= usableHosts) return i;
  }
  return NaN;
};

const cidrMaskToMask = (cidrMask: number): string => {
  const encodedMask = "1".repeat(cidrMask) + "0".repeat(32 - cidrMask);
  return decodeIP(encodedMask);
};

const calculateSubnet = (network: string, host: number): [Subnet, string] => {
  const cidrMask = getCidrMask(host);
  const mask = cidrMaskToMask(cidrMask);
  const encodedIP = encodeIP(network);
  const broadcast = getBroadcastAddress(encodedIP, cidrMask);
  const encodedNetwork = encodeIP(network);
  const encodedBroadcast = encodeIP(broadcast);
  const totalHosts = getTotalHosts(encodedNetwork, encodedBroadcast);
  const usableHosts = getUsableHosts(totalHosts);
  const nextSubnet = getNextSubnet(encodedBroadcast);

  return [
    {
      hostsNeeded: host,
      availableHosts: usableHosts,
      networkAddr: network,
      slash: cidrMask,
      mask: mask,
      usableRange: getUsableIPRange(
        usableHosts,
        encodedNetwork,
        encodedBroadcast
      ),
      broadcast: broadcast,
    },
    nextSubnet,
  ];
};

function generateSubnets(formData: FormData): [Subnet[], NetworkInfo] {
  let data: Subnet[] = [];
  let currentNetwork = getNetworkAddress(
    encodeIP(formData.ip),
    formData.cidrMask
  );
  const networkInfo: NetworkInfo = {
    network: currentNetwork,
    slash: formData.cidrMask,
    availableHosts: Math.pow(2, 32 - formData.cidrMask) - 2,
    neededHosts: formData.hosts.reduce((total, current) => {
      return total + current;
    }, 0),
  };
  // Required to sort hosts by descending order
  formData.hosts.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  for (let i = 0; i < formData.subnets; i++) {
    const subnet = calculateSubnet(currentNetwork, formData.hosts[i]);
    currentNetwork = subnet[1];

    data.push(subnet[0]);
  }
  return [data, networkInfo];
}

export { generateSubnets };
