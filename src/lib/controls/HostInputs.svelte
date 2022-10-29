<script lang="ts">
  import { hosts } from "@utils/stores";

  export let subnets: number;

  $: if (isNaN(subnets)) subnets = 3;
  $: $hosts = Array(subnets).fill("");
</script>

<h2 class="text-gray-500 font-bold mt-10 mb-3">Number of hosts</h2>

<div class="flex flex-col">
  {#each $hosts as _, i}
    <input
      type="number"
      class="appearance-none border-2 border-gray-200 w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-400"
      placeholder="0"
      bind:value={$hosts[i]}
    />
  {/each}
</div>
