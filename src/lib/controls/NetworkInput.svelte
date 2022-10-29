<script lang="ts">
  import { network, cidrMask } from "@utils/stores";
  import Input from "./Input.svelte";
</script>

<div class="flex items-center flex-row mb-5">
  <div class="w-1/4">
    <label for="network" class="text-gray-500 font-bold pr-1">Network</label>
  </div>
  <div class="w-2/4">
    <Input id="network" value={network} />
  </div>
  <div class="w-1/4 flex flex-row items-center">
    <p class="font-bold mx-1">/</p>
    <Input id="cidr" value={cidrMask} />
  </div>
</div>
