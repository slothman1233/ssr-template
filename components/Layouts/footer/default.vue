<template>footer msg:{{ msg }}</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: "hread",
  },
});

const myClick = () => {
  console.log("my-footer-click");
};

defineExpose({
  myClick,
});
</script>

<style lang="less" scoped></style>
