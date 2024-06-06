// import * as ElementPlus from "element-plus";
// import ElementPlus from 'element-plus';
// 统一导入el-icon图标

import * as ElementPlusIcons from "@element-plus/icons-vue";

import zhCn from "element-plus/es/locale/lang/zh-cn";

export default defineNuxtPlugin((nuxtApp) => {
  // 统一注册el-icon图标
  // for (const iconName in ElIconModules) {
  //   nuxtApp.vueApp.component(
  //     // @ts-ignore
  //     ElIconModules[iconName].name,
  //     // @ts-ignore
  //     ElIconModules[iconName].render(),
  //   );
  // }
  for (const [key, component] of Object.entries(ElementPlusIcons)) {
    nuxtApp.vueApp.component(key, component);
  }
  // nuxtApp.vueApp.use(ElementPlus, {
  //   locale: zhCn,
  // });
});
