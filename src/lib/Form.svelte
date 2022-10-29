<script lang="ts">
  import { network, subnets } from "../stores";
  import LabeledInput from "./controls/LabeledInput.svelte";
  import HostInputs from "./controls/HostInputs.svelte";

  let subnetsProp = 3;

  function generate(e: any) {
    console.log("submit!");
  }
</script>

<form class="max-w-sm mt-16" on:submit|preventDefault={generate}>
  <LabeledInput
    title="Network"
    placeholder="192.168.1.0/24"
    id="network"
    value={network}
  />
  <LabeledInput title="Subnets" placeholder="3" id="subnets" value={subnets}>
    <button
      type="button"
      class="text-white ml-2 px-2 py-1 rounded-md bg-indigo-500 focus:ring"
      on:click={() => (subnetsProp = parseInt($subnets, 10))}
    >
      Apply
    </button>
  </LabeledInput>

  <HostInputs subnets={subnetsProp} />

  <div class="flex justify-center">
    <button
      type="submit"
      class="text-lg mt-10 px-3 py-2 border-2 rounded-md border-indigo-600 focus:bg-indigo-200 focus:ring"
    >
      Generate
    </button>
  </div>
</form>
