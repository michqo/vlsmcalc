<script lang="ts">
  import { formSchema } from "@utils/types";
  import {
    errors,
    network,
    hosts,
    subnets,
    parsedSubnets,
    cidrMask,
    generatedSubnets,
  } from "@utils/stores";
  import { generateSubnets } from "@utils/helper";
  import NetworkInput from "./controls/NetworkInput.svelte";
  import SubnetInput from "./controls/SubnetInput.svelte";
  import HostInputs from "./controls/HostInputs.svelte";

  function onSubmit(e: any) {
    const data = {
      networkAddr: $network,
      cidrMask: $cidrMask,
      subnets: $subnets,
      hosts: $hosts,
    };
    $errors = {};
    try {
      const validated = formSchema.validateSync(data, { abortEarly: false });
      $generatedSubnets = generateSubnets(validated);
    } catch (e) {
      e.inner.forEach((i: any) => {
        $errors[`${i.path}`] = i.message;
      });
    }
  }

  $: $errors.networkAddr && alert(`Error: ${$errors.networkAddr}`);
  $: $errors.cidrMask && alert(`Error: ${$errors.cidrMask}`);
  $: $errors.subnets && alert(`Error: ${$errors.subnets}`);
</script>

<form class="max-w-xs md:max-w-sm mt-16" on:submit|preventDefault={onSubmit}>
  <NetworkInput />
  <SubnetInput>
    <button
      type="button"
      class="text-white ml-2 px-2 py-1 rounded-md bg-indigo-500 focus:ring"
      on:click={() => ($parsedSubnets = parseInt($subnets, 10))}
    >
      Apply
    </button>
  </SubnetInput>
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
