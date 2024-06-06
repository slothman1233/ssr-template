<template>
  <div class="box">index.vue</div>
  <h1 @click="onclick">3123213213</h1>
</template>

<script lang="ts" setup>
import { getrandom } from "~/common/clientApi/randomDataService/randomData";

// useHead({
//   title: "cdom",
//   meta: [
//     {
//       name: "description",
//       content: "cdoms",
//     },
//   ],
// });

const router = useRoute();
const { id } = router.params;
// console.log(id);

const dd: any = await getrandom();

// console.log(dd);

useHead({
  title: "cdom",
  // 作为字符串，
  // 其中`%s`会被标题替换
  //   titleTemplate: '%s - 网站标题',
  // ... 或者作为一个函数
  titleTemplate: (productCategory) => {
    return productCategory
      ? `${productCategory} - ${id} - ${dd.code} - 网站标题`
      : `${id} - 网站标题`;
  },
});

const config = useRuntimeConfig();
// console.log(111, config);

const onclick = async () => {
  const dd: any = await getrandom();
  console.log(dd);
};
</script>

<style lang="less">
/* @import url("../assets/styles/scss/common.scss"); */

body {
  opacity: 0.9;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
