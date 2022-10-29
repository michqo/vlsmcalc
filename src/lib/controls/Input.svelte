<script lang="ts">
  import type { Writable } from "svelte/store";

  export let id: string;
  export let value: Writable<string>;
</script>

<input
  type="text"
  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:outline-none focus:border-indigo-500"
  {id}
  bind:value={$value}
/>
