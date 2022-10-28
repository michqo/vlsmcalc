<script lang="ts">
  import type { Writable } from "svelte/store";

  export let title: string;
  export let placeholder: string;
  export let id: string;
  export let value: Writable<string>;
</script>

<div class="md:flex md:items-center md:flex-row mb-5">
  <div class="md:w-1/4">
    <label for={id} class="text-gray-500 font-bold pr-1">{title}</label>
  </div>
  <div class="md:w-3/4 flex flex-row">
    <input
      type="text"
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:outline-none focus:border-indigo-500"
      {placeholder}
      {id}
      bind:value={$value}
    />
    <slot />
  </div>
</div>
