<script lang="ts">
  import Form from "./lib/Form.svelte";
  import Subnets from "./lib/Subnets.svelte";
</script>

<main class="flex flex-col items-center mt-10">
  <h1 class="text-indigo-500 text-4xl md:text-5xl text-center font-bold">Subnet Generator</h1>
  <Form />
  <div class="max-w-6xl mt-10">
    <Subnets />
  </div>
</main>
