<script lang="ts">
  import { subnets } from "@utils/stores";

  const headerClass =
    "px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider";
  const itemClass =
    "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap";
  const numberClass =
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";
</script>

{#if $subnets.length != 0}
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
      {#each $subnets as subnet, i}
        <tr class="border-b">
          <td class={numberClass}>{i + 1}</td>
          <td class={itemClass}> {subnet.hostsNeeded} </td>
          <td class={itemClass}> 510 </td>
          <td class={itemClass}> {subnet.networkAddr} </td>
          <td class={itemClass}> /23 </td>
          <td class={itemClass}> 255.255.254.0 </td>
          <td class={itemClass}> 192.168.0.1 - 192.168.1.254 </td>
          <td class={itemClass}> 192.168.1.255 </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
