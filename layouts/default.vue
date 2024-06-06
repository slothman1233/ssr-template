<template>
  <div>
    <LayoutsHreadDefault :msg="'hread'"></LayoutsHreadDefault>
    <div @click="myclick">default_c_click</div>
    <slot />
    <LayoutsFooterDefault :msg="'footer'" ref="footer"></LayoutsFooterDefault>
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
