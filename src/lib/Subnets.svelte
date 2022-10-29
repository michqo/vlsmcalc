<script lang="ts">
  const headerClass =
    "px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider";
  const itemClass =
    "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap";
  const numberClass =
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";
</script>

<table class="mt-10 block min-w-full overflow-x-auto divide-y divide-slate-200">
  <tr>
    <th scope="col" class={headerClass}>No. of subnet</th>
    <th scope="col" class={headerClass}>Hosts Needed</th>
    <th scope="col" class={headerClass}>Hosts Available</th>
    <th scope="col" class={headerClass}>Network Address</th>
    <th scope="col" class={headerClass}>Slash</th>
    <th scope="col" class={headerClass}>Mask</th>
    <th scope="col" class={headerClass}>Usable Range</th>
    <th scope="col" class={headerClass}>Broadcast</th>
  </tr>

  <tbody>
    <tr class="border-b">
      <td class={numberClass}>1</td>
      <td class={itemClass}> 500 </td>
      <td class={itemClass}> 510 </td>
      <td class={itemClass}> 192.168.0.0 </td>
      <td class={itemClass}> /23 </td>
      <td class={itemClass}> 255.255.254.0 </td>
      <td class={itemClass}> 192.168.0.1 - 192.168.1.254 </td>
      <td class={itemClass}> 192.168.1.255 </td>
    </tr>
  </tbody>
</table>
