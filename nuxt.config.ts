// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from "vite";

import path from "path";
// import proxy from "./config/viteConfig/proxy";
// import plugins from "./config/viteConfig/plugins/plugins";
// https://vitejs.dev/config/

import { wrapperEnv } from "./script/env";

import { genAntdStyle } from "./script/antd/genantdstyle";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import proxy from "./script/proxy";

//env根路径
const envDir = path.resolve(process.cwd(), "config/env");

// const isBuild = command === 'build';

const env = loadEnv("dev", envDir, "NUXT_");
const viteEnv = wrapperEnv(env);
const { NUXT_PORT, NUXT_HOST } = viteEnv;

const isProduction = process.env.NUXT_PROJECT_ENV === "prod";

//编译antd全局样式
genAntdStyle();

export default defineNuxtConfig({
  devtools: { enabled: true },
  //模块导入
  // modules: ["@nuxtjs/style-resources"],

  css: [
    "~/assets/styles/scss/common.scss",
    "~/assets/styles/public/index.less",
    "element-plus/dist/index.css",
    "ant-design-vue/dist/reset.css",
  ],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "@element-plus/nuxt",
    "@vant/nuxt",
    "@ant-design-vue/nuxt",
  ],
  imports: {
    dirs: [
      // "stores",
      // "services/**/*.{ts,js,mjs,mts}",
      // "common/**/*.{ts,js,mjs,mts}",
      "./node_modules/@element-plus/icons-vue/dist/types",
      // "layouts/components/**/*.vue",
    ],
  },

  app: {
    head: {
      title: "Nuxt",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
        },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: '@/assets/reset.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  vant: {
    // ...
    // 懒加载指令依赖此配置
    lazyload: true,
  },
  antd: {
    // Options
  },

  generate: {},

  runtimeConfig: {
    // 给客户端使用的环境变量配置
    public: (function () {
      const env = loadEnv("dev", envDir, "NUXT_C");
      const viteEnv = wrapperEnv(env);
      return viteEnv;
    })(),
    githubToken: "12321",
  },

  postcss: {
    plugins: {
      //自动补全
      autoprefixer: {
        add: true,
        grid: true,
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "not ie <= 9",
          "ff >= 30",
          "> 1%",
          "last 2 versions",
        ],
      },
    },
  },

  build: {
    analyze: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: '@import "./client/assets/style/index.scss";'
        // }

        //注入全局less变量
        less: {
          javascriptEnabled: true,
          additionalData: `@import (reference) "./assets/styles/public/common/index.less";`,
        },
      },
    },
    resolve: {
      alias: {
        "ant-design-vue/dist": "ant-design-vue/dist",
        "ant-design-vue/es": "ant-design-vue/es",
        "ant-design-vue/lib": "ant-design-vue/es",
        "ant-design-vue": "ant-design-vue/es",
      },
    },

    server: {
      // 是否自动打开浏览器
      open: false,
      // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      // host: NUXT_HOST,
      // 服务器端口号
      // port: NUXT_PORT,
      // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      // 为开发服务器配置 CORS
      cors: true,
      // 设置为 true 强制使依赖预构建
      // force: true,
      // 反向代理
      proxy: proxy,
    },

    esbuild: {
      drop: isProduction ? ["console", "debugger"] : [],
    },
    build: {
      //浏览器兼容性
      target: "es2015",

      // 压缩
      minify: isProduction ? "esbuild" : false,

      // 进行压缩计算
      reportCompressedSize: false,

      rollupOptions: {
        //js 和 css 分包
        output: (() => {
          if (isProduction) {
            return {
              chunkFileNames: "_nuxt/js/[name]-[hash].js",
              entryFileNames: "_nuxt/js/[name]-[hash].js",
              assetFileNames: "_nuxt/[ext]/[name]-[hash].[ext]",
            };
          }
          return {};
        })(),
      },
    },
    plugins: (() => {
      return [
        createSvgIconsPlugin({
          // 指定需要缓存的图标文件夹
          iconDirs: [path.resolve(process.cwd(), "public/icons/svg")],
          // 指定symbolId格式
          symbolId: "icon-[dir]-[name]",
        }),
      ];
    })(),
  },
});
