<script lang="ts">
  import { generatedSubnets, networkInfo } from "@utils/stores";

  const headerClass =
    "px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider";
  const itemClass =
    "text-sm text-gray-900 font-light px-6 py-6 whitespace-nowrap";
  const numberClass =
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";
  const pClass = "text-gray-900 text-sm text-center";

  $: ({ network, slash, availableHosts, neededHosts } = $networkInfo);
</script>

{#if $generatedSubnets.length != 0}
  <p class={pClass}>
    The network {network}/{slash} has {availableHosts} hosts.
  </p>
  <p class={pClass}>Your subnets need {neededHosts} hosts.</p>
  <table
    class="mt-2 mb-20 block min-w-full overflow-x-auto divide-y divide-indigo-600"
  >
    <tr>
      <th scope="col" class={headerClass}>No.</th>
      <th scope="col" class={headerClass}>Hosts Needed</th>
      <th scope="col" class={headerClass}>Hosts Available</th>
      <th scope="col" class={headerClass}>Unused hosts</th>
      <th scope="col" class={headerClass}>Network Address</th>
      <th scope="col" class={headerClass}>Slash</th>
      <th scope="col" class={headerClass}>Mask</th>
      <th scope="col" class={headerClass}>Usable Range</th>
      <th scope="col" class={headerClass}>Broadcast</th>
    </tr>

    <tbody>
      {#each $generatedSubnets as subnet}
        <tr class="border-b border-indigo-400">
          <td class={numberClass}>{subnet.name}</td>
          <td class={itemClass}> {subnet.hostsNeeded} </td>
          <td class={itemClass}> {subnet.availableHosts} </td>
          <td class={itemClass}> {subnet.unusedHosts} </td>
          <td class={itemClass}> {subnet.networkAddr} </td>
          <td class={itemClass}> /{subnet.slash} </td>
          <td class={itemClass}> {subnet.mask} </td>
          <td class={itemClass}> {subnet.usableRange} </td>
          <td class={itemClass}> {subnet.broadcast} </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
