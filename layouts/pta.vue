<template>
  <div>
    <LayoutsHreadDefault :msg="'hread'"></LayoutsHreadDefault>
    <div @click="myclick">pta_c_click</div>
    <slot />
    <LayoutsFooterDefault :msg="'footer'"></LayoutsFooterDefault>
  </div>
</template>

<script setup lang="ts">
import type { LayoutsFooterDefault } from "#build/components";

const footer = ref<InstanceType<typeof LayoutsFooterDefault>>();

const myclick = () => {
  footer.value?.myClick();
};
</script>

<style scoped></style>
