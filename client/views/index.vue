<template>
  <div> {{ title }} </div>
  <div>{{ info }}</div>
  <div>{{ infos }}</div>
  <img src="/assets/image/logo.png" style="width: 50px" />
  <HelloWorld :msg="info"></HelloWorld>
  <HelloWorlds :msg="info"></HelloWorlds>
  <div>
    <SvgIcon icon-class="a-bug"></SvgIcon>
    <SvgIcon icon-class="projectManage"></SvgIcon>
  </div>

  <VanButton type="primary">asdfasd</VanButton>

  <a-button type="danger">asdfa</a-button>

  {{ data }}
</template>

<script lang="ts">
  // import setupData from '@/common/utils/libs/setupData';
  // import { getrandom } from '@/services/randomDataService/randomData';
  // import { ResponseData } from 'publicommon/utils/http';
  import { getrandom } from '@/services/randomDataService/randomData';
  import { ResponseData } from 'publicommon/utils/http';
  import { propType } from './model';
  export default defineComponent({
    name: 'ViewsHome',

    // beforeRouteEnter(to, from, next) {

    //   if (to.path === '/index') {
    //     next('/home');
    //   } else {
    //     next();
    //   }
    // },
    head() {
      return {
        title: 'index234324',
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
    async setup(props: propType, ctx) {
      // console.log(import.meta.glob('/**/*.vue'));
      // const { proxy } = getCurrentInstance();
      // const routers = proxy.$router.currentRoute.value;

      const data = (await getrandom()) as ResponseData<any>;

      return {
        title: 'data.bodyMessage.name',
        //默认值   上面info 会替换掉这个info的值
        info: '3',
        infos: {},
        data,
      };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
  }
</style>
