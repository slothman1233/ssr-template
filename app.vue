<template>
  <div>
    <AStyleProvider hash-priority="high">
      <AConfigProvider :theme="lightTheme">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </AConfigProvider>
    </AStyleProvider>
  </div>
</template>
<script setup lang="ts">
import { lightTheme } from "~/script/antd/theme/light";

useHead({
  link: [{ rel: "stylesheet", href: "/styles/and/theme/light.css" }],
});
</script>

<style>
/* @import url("/assets/styles/and/theme/light.css"); */
</style>
