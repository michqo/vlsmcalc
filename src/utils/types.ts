import * as yup from "yup";

const formSchema = yup.object().shape({
  networkAddr: yup
    .string()
    .matches(
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Network address is invalid"
    )
    .typeError("Network address is invalid"),
  cidrMask: yup
    .number()
    .min(1, "Minimum number of CIDR netmask is 1")
    .max(31, "Maximum number of CIDR netmask is 31")
    .typeError("Invalid CIDR netmask"),
  subnets: yup
    .number()
    .min(1, "Minimum number of subnets is 1")
    .max(2097157, "Maximum number of subnets is 2097157")
    .typeError("Invalid number of subnets"),
  hosts: yup
    .array()
    .of(
      yup
        .number()
        .min(1, "Minimum number of hosts per subnet is 1")
        .max(16777214, "Maximum number of hosts per subnet is 16777214")
        .typeError("Invalid number of hosts")
    )
    .typeError("Invalid number of hosts"),
});

interface Subnet {
  hostsNeeded: string;
  // hostsAvailable: number;
  networkAddr: string;
  // slash: string;
  // mask: string;
  // usableRange: string;
  // broadcast: string;
}

export { type Subnet, formSchema };
