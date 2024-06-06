<template>
  <div class="box">index.vue</div>
  <h1 @click="dclick">{{ usersStore.age }}</h1>

  <div>pos: {{ x }}, {{ y }}</div>

  <div>{{ ss }}</div>
</template>

<script lang="ts" setup>
import { useUsersStore } from "~/stores/useUsersStore";

// useHead({
//   title: "首页11111",
//   meta: [
//     {
//       name: "descri2ption",
//       content: "首页2222",
//     },
//   ],
// });  

const usersStore = useUsersStore();
const anystr = Utils.toAnyString();

// pinia SSR
usersStore.$patch((state) => {
  // console.log(counter.times);
  state.age = 200;
});

onMounted(async () => {
  await usersStore.asyncSetAge(22222);
  console.log(usersStore.age);
});

// console.log(`age:${ages}`);

usersStore.asyncSetAge(22222);

// console.log(usersStore);
// const ss = computed(usersStore.get)

useSeoMeta({
  title: `${anystr} - 我的神奇网站`,
  ogTitle: "我的神奇网站",
  description: "这是我的神奇网站，让我来告诉你关于它的一切。",
  ogDescription: "这是我的神奇网站，让我来告诉你关于它的一切。",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

const ss = useFoo();

// getrandoxm1

// const a = index

const config = useRuntimeConfig();
// console.log(111, config);

// const dataobj = await $fetch("/api/dom?a=1");
// console.log(666666);
// console.log(dataobj);

const dclick = () => {
  usersStore.asyncSetAge(987);
};

//vueuse

const { x, y } = useMouse();
</script>

<style lang="less">
/* @import url("../assets/styles/scss/common.scss"); */

body {
  opacity: 0.9;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
