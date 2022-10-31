<script lang="ts">
  import { errors, hosts } from "@utils/stores";

  export let subnets: number;

  $: if (isNaN(subnets)) subnets = 3;
  $: $hosts = Array(subnets).fill("");
</script>

<h2 class="text-gray-500 font-bold mt-10 mb-0.5">Number of hosts</h2>

<div class="flex flex-col mb-16">
  {#each $hosts as _, i}
    <input
      type="number"
      class="border-2 border-gray-300 rounded my-1 w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none {$errors[`hosts[${i}]`] ? 'error' : ''}"
      placeholder="0"
      bind:value={$hosts[i]}
    />
  {/each}
</div>
