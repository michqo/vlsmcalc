<script lang="ts">
  import { errors, subnetsCount } from "@utils/stores";
  import Input from "./Input.svelte";
</script>

<div class="flex items-center flex-row mb-5">
  <div class="w-1/4">
    <label for="subnets" class="text-gray-500 font-bold pr-1">Subnets</label>
  </div>
  <div class="w-3/4 flex flex-row">
    <Input id="subnets" value={subnetsCount} error={$errors.subnets} />
    <slot />
  </div>
</div>
