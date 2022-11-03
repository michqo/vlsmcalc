import * as yup from "yup";

const formSchema = yup.object().shape({
  ip: yup
    .string()
    .matches(
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Network address is invalid"
    )
    .typeError("Network address is invalid"),
  cidrMask: yup
    .number()
    .integer("Invalid CIDR netmask")
    .min(1, "Minimum number of CIDR netmask is 1")
    .max(31, "Maximum number of CIDR netmask is 31")
    .typeError("Invalid CIDR netmask"),
  subnets: yup
    .number()
    .integer("Invalid number of subnets")
    .min(1, "Minimum number of subnets is 1")
    .max(2097157, "Maximum number of subnets is 2097157")
    .typeError("Invalid number of subnets"),
  hosts: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string(),
        number: yup
          .number()
          .min(1, "Minimum number of hosts per subnet is 1")
          .max(16777214, "Maximum number of hosts per subnet is 16777214")
          .typeError("Invalid number of hosts"),
      })
    )
    .typeError("Invalid number of hosts"),
});

type FormData = yup.InferType<typeof formSchema>;

interface Errors {
  ip?: string;
  cidrMask?: string;
  subnets?: string;
  hosts?: string;
}

interface Subnet {
  name: string;
  hostsNeeded: number;
  availableHosts: number;
  unusedHosts: number;
  networkAddr: string;
  slash: number;
  mask: string;
  usableRange: string;
  broadcast: string;
}

interface NetworkInfo {
  network: string;
  slash: number;
  availableHosts: number;
  neededHosts: number;
}

interface Host {
  name: string;
  number: number;
}

export type { Subnet, Errors, FormData, NetworkInfo, Host };
export default formSchema;
