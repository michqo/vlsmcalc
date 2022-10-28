<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button
  on:click={increment}
  class="text-lg mt-20 px-3 py-2 border-2 rounded-md border-indigo-600 focus:bg-indigo-200 focus:ring"
>
  count is {count}
</button>
