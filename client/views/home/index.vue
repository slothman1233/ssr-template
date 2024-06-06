<template>
  <div id="as">{{ result }}</div>

  <img src="/assets/image/logo.png" />
  <div>
    <SvgIcon icon-class="a-bug"></SvgIcon>
    <SvgIcon icon-class="projectManage"></SvgIcon>
  </div>

  <div> <HelloWorld :msg="msg"></HelloWorld></div>
</template>

<script lang="ts">
  import { getConfigModel } from '@/common/utils/libs/configmodel';
  import { ElNotification } from 'element-plus';
  import { propType } from './model';

  export default defineComponent({
    name: 'ViewsHome',
    // 1、使用 head 方法
    head() {
      return {
        title: this.title,
        metas: [
          {
            name: 'description',
            content: 'description',
          },
          {
            name: 'keywords',
            content: 'keywords',
          },
          {
            property: 'og:title',
            content: 'fdfdfdf',
          },
          {
            property: 'og:description',
            content: 'ogDescription',
          },
        ],
      };
    },
    // beforeRouteEnter(to, from, next) {
    //   console.log(to, from, next);
    // },

    setup(props: propType, ctx) {
      nextTick(() => {
        ElNotification({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning',
        });
      });

      // const { proxy } = getCurrentInstance();
      // console.log(proxy);
      const result = '111';
      // proxy.$configModel.name

      const config = getConfigModel();
      console.log(config);

      return {
        msg: config.name,
        title: 'title & sdf33sdf',
        result,
      };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
    width: var(--default-bg);
  }

  #as {
    width: 100px;
  }
</style>
