<script lang="ts">
  import { errors, hosts, parsedSubnets } from "@utils/stores";

  const hClass = "text-gray-500 font-bold mb-0.5";
  const inputClass =
    "border-2 border-gray-300 rounded my-1 py-2 px-4 text-gray-700 leading-tight focus:outline-none";

  $: if (isNaN($parsedSubnets)) $parsedSubnets = 3;
  $: $hosts = [
    ...Array($parsedSubnets)
      .fill({})
      .map((_, i) => {
        return { name: (i + 1).toString(), number: NaN };
      }),
  ];
</script>

<div class="flex flex-row mt-10 mb-16">
  <div class="flex flex-col w-1/2 mr-2">
    <h2 class={hClass}>Subnet names</h2>
    {#each $hosts as _, i}
      <input class={inputClass} bind:value={$hosts[i].name} />
    {/each}
  </div>
  <div class="flex flex-col w-1/2">
    <h2 class="{hClass} mr-4">Number of hosts</h2>
    {#each $hosts as _, i}
      <input
        type="number"
        class="{inputClass} {$errors[`hosts[${i}].number`] ? 'error' : ''}"
        placeholder="0"
        bind:value={$hosts[i].number}
      />
    {/each}
  </div>
</div>
