<script lang="ts">
  import { generatedSubnets } from "@utils/stores";

  const headerClass =
    "px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider";
  const itemClass =
    "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap";
  const numberClass =
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";
</script>

{#if $generatedSubnets.length != 0}
  <table
    class="mt-10 mb-20 block min-w-full overflow-x-auto divide-y divide-slate-200"
  >
    <tr>
      <th scope="col" class={headerClass}>No.</th>
      <th scope="col" class={headerClass}>Hosts Needed</th>
      <th scope="col" class={headerClass}>Hosts Available</th>
      <th scope="col" class={headerClass}>Network Address</th>
      <th scope="col" class={headerClass}>Slash</th>
      <th scope="col" class={headerClass}>Mask</th>
      <th scope="col" class={headerClass}>Usable Range</th>
      <th scope="col" class={headerClass}>Broadcast</th>
    </tr>

    <tbody>
      {#each $generatedSubnets as subnet, i}
        <tr class="border-b">
          <td class={numberClass}>{i + 1}</td>
          <td class={itemClass}> {subnet.hostsNeeded} </td>
          <td class={itemClass}> {subnet.availableHosts} </td>
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
