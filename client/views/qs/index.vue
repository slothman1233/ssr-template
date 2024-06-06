<template>
  <div>qslist</div>
  <div> 12321 </div>
  <cpmDemo></cpmDemo>

  <HelloWorlds></HelloWorlds>
  <van-rate></van-rate>

  <VanButton>asdfasd</VanButton>

  <a-button>asdfa</a-button>
</template>

<script lang="ts">
  import { propType, staticDataModel } from './model';
  import cpmDemo from './components/cpmDemo/index.vue';
  export default defineComponent({
    name: 'qsList',
    components: { cpmDemo },
    setup(props: propType, ctx) {
      const staticData: staticDataModel = reactive({
        ...props,
        list: [
          {
            text: '点赞',
            color: 'blue',
            fontSize: 28,
          },
          {
            text: '分享',
          },
          {
            text: '评论',
          },
        ],
        show: false,
      });

      const refData = toRefs(staticData);

      return {
        ...refData,
      };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
  }
</style>
