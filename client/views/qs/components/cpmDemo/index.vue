<template>
  <div>{{ a }}</div>
</template>

<script lang="ts">
  import { propType } from './model';
  export default defineComponent({
    name: 'cpmDome',
    setup(props: propType, ctx) {
      defineComponent;
      return {
        a: 123123,
      };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
  }
</style>
