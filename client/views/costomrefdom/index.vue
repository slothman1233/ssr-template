<template>
  <div>
    {{ asdata }}
  </div>

  <input v-model="text" />
  {{ text }}
</template>

<script lang="ts">
  import { fetchRef, useDebouncedRef } from '@/common/utils/libs/customRef';
  import { getrandom, getrandom1 } from '@/services/randomDataService/randomData';
  import { propType } from './model';

  export default defineComponent({
    name: 'costomRef',

    setup(props: propType, ctx) {
      let asdata = fetchRef(getrandom);
      setTimeout(() => {
        asdata.value = getrandom1;
      }, 2000);

      //useDebouncedRef

      return {
        asdata,
        text: useDebouncedRef('hello'),
      };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
  }
</style>
