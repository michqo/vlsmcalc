import * as yup from "yup";

const formSchema = yup.object().shape({
  networkAddr: yup
    .string()
    .matches(
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    ),
  cidrMask: yup.number().min(8).max(31),
  subnets: yup.number().min(1).max(2097157),
  hosts: yup.array().of(yup.number().min(1).max(16777214)),
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
