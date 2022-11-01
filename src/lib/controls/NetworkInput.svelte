<script lang="ts">
  import { errors, ip, cidrMask } from "@utils/stores";
  import Input from "./Input.svelte";
</script>

<div class="flex items-center flex-row mb-3">
  <div class="w-1/4">
    <label for="Ip" class="text-gray-500 font-bold pr-1">IP</label>
  </div>
  <div class="w-2/4">
    <Input id="Ip" value={ip} error={$errors.ip} />
  </div>
  <div class="w-1/4 flex flex-row items-center">
    <p class="font-bold mx-1">/</p>
    <Input id="cidr" value={cidrMask} error={$errors.cidrMask} />
  </div>
</div>
