<template>
  <div id="as">{{ result }}</div>

  <!-- <img src="/assets/image/logo.png" /> -->
  <div>
    <SvgIcon icon-class="a-bug"></SvgIcon>
    <SvgIcon icon-class="projectManage"></SvgIcon>
  </div>
  12321
  <el-icon>
    <ElIconLock />
  </el-icon>

  <ElInput>ElInput</ElInput>
  <ElButton>ElButton</ElButton>

  <van-button type="primary" @click="showToast('toast')">button</van-button>

  <AButton type="primary">AB33utt22on</AButton>

  <!-- <div><HelloWorld :msg="msg"></HelloWorld></div> -->
</template>

<script lang="ts" setup>
import type { ss } from "./mode";

// useSeoMeta({
//   title: "我的神奇网站",
//   ogTitle: "我的神奇网站",
//   description: "这是我的神奇网站，让我来告诉你关于它的一切。",
//   ogDescription: "这是我的神奇网站，让我来告诉你关于它的一切。",
//   ogImage: "https://example.com/image.png",
//   twitterCard: "summary_large_image",
// });
// nextTick(() => {
//   ElNotification({
//     title: "Warning",
//     message: "This is a warning message",
//     type: "warning",
//   });
// });
const msg = "adfasd",
  title = "title & sdf33sdf",
  result = "res";
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
