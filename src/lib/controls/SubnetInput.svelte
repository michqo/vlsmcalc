<script lang="ts">
  import { errors, subnets, parsedSubnets } from "@utils/stores";
  import Input from "./Input.svelte";
</script>

<div class="flex items-center flex-row mb-8">
  <div class="w-1/4">
    <label for="subnets" class="text-gray-500 font-bold pr-1">Subnets</label>
  </div>
  <div class="w-3/4 flex flex-row">
    <Input id="subnets" value={subnets} error={$errors.subnets} />
    <button
      type="button"
      class="text-white ml-2 px-2 py-1 rounded-md bg-indigo-500 focus:ring"
      on:click={() => ($parsedSubnets = parseInt($subnets, 10))}
    >
      Apply
    </button>
  </div>
</div>
