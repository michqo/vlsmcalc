<script lang="ts">
  import Form from "./lib/Form.svelte";
  import Subnets from "./lib/Subnets.svelte";
  import Header from "./lib/Header.svelte";
</script>

<Header />
<main class="flex flex-col items-center mt-10">
  <Form />
  <div class="max-w-sm md:max-w-2xl lg:max-w-6xl mt-10">
    <Subnets />
  </div>
</main>
