<script lang="ts">
  import { fade } from "svelte/transition";

  import { errors, network, hosts, subnetsCount, cidrMask } from "@utils/stores";
  import { formSchema } from "@utils/types";
  import NetworkInput from "./controls/NetworkInput.svelte";
  import SubnetInput from "./controls/SubnetInput.svelte";
  import HostInputs from "./controls/HostInputs.svelte";

  let subnetsProp = 3; // Switch to store

  function onSubmit(e: any) {
    const data = {
      networkAddr: $network,
      cidrMask: $cidrMask,
      subnets: $subnetsCount,
      hosts: $hosts,
    };
    $errors = {};
    try {
      formSchema.validateSync(data, { abortEarly: false });
    } catch (e) {
      e.inner.forEach(i => {
        $errors[`${i.path}`] = i.message;
      });
    }
  }
</script>

<form class="max-w-sm mt-16" on:submit|preventDefault={onSubmit}>
  <NetworkInput />
  <SubnetInput>
    <button
      type="button"
      class="text-white ml-2 px-2 py-1 rounded-md bg-indigo-500 focus:ring"
      on:click={() => (subnetsProp = parseInt($subnetsCount, 10))}
    >
      Apply
    </button>
  </SubnetInput>
  <!--TODO: Show alert on error instead -->
  {#if $errors.subnets}
    <p transition:fade class="text-lg text-red-700 my-3">{$errors.subnets}</p>
  {/if}

  <HostInputs subnets={subnetsProp} />

  <div class="flex justify-center">
    <button
      type="submit"
      class="text-lg mt-8 px-3 py-2 border-2 rounded-md border-indigo-600 focus:bg-indigo-200 focus:ring"
    >
      Generate
    </button>
  </div>
</form>
