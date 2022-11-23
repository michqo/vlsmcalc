<script lang="ts">
  import formSchema from "@utils/types";
  import {
    errors,
    ip,
    hosts,
    subnets,
    cidrMask,
    generatedSubnets,
    networkInfo,
  } from "@utils/stores";
  import { generateSubnets } from "@utils/helper";
  import NetworkInput from "./controls/NetworkInput.svelte";
  import SubnetInput from "./controls/SubnetInput.svelte";
  import HostInputs from "./controls/HostInputs.svelte";

  function onSubmit(e: any) {
    const data = {
      ip: $ip,
      cidrMask: $cidrMask,
      subnets: $subnets,
      hosts: structuredClone($hosts),
    };
    $errors = {};
    try {
      const validated = formSchema.validateSync(data, { abortEarly: false });
      const generatedData = generateSubnets(validated);
      $generatedSubnets = generatedData[0];
      $networkInfo = generatedData[1];
    } catch (e) {
      let hostErrShowed = false;
      e.inner.forEach((i: any) => {
        if (i.path.substring(0, 5) == "hosts" && !hostErrShowed) {
          alert(i.message);
          hostErrShowed = true;
        }
        $errors[`${i.path}`] = i.message;
      });
    }
  }

  $: $errors.ip && alert($errors.ip);
  $: $errors.cidrMask && alert($errors.cidrMask);
  $: $errors.subnets && alert($errors.subnets);
</script>

<form class="max-w-xs md:max-w-sm mt-16" on:submit|preventDefault={onSubmit}>
  <NetworkInput />
  <SubnetInput />
  <HostInputs />

  <div class="flex justify-center">
    <button
      type="submit"
      class="text-lg px-3 py-2 border-2 rounded-md border-indigo-600 focus:bg-indigo-200 focus:ring"
    >
      Generate
    </button>
  </div>
</form>
