<template>hread msg:{{ msg }}</template>

<script setup lang="ts" name="lHread">
const props = defineProps({
  msg: {
    type: String,
    default: "hread",
  },
});
</script>

<style lang="less" scoped></style>
