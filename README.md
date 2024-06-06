# 基于 nuxt3+vue3+pinia+less+sass+element-plus+ant-design+vant 框架

nuxt 官网

```
https://nuxt.com/
```

运行要求

```bash
node版本 v18.14.0以上
npm版本 9.0.0以上
```

docker 命令

```dockerfile
docker build -t nuxt . --build-arg env=prod --tag nuxt:1

docker run -d -p :3000:3000  nuxt:1
```

创建文件方法

1. 在pages里面常见文件夹->.vue 页面文件

2. 在app -> router.options.ts 中添加路由

.env文件说明(.env.环境)

以 “NUXT*C*” 开头的常量是给前端使用。
使用方法：(NUXT_C_BASE_URL的使用)

```typescript
const config = useRuntimeConfig();
config.public.NUXT_C_BASE_URL;
```

设置页面头

方法一 页面中使用useHead

```typescript
useHead({
  title: "cdom",
  meta: [
    {
      name: "description",
      content: "cdoms",
    },
    {
      name: "title",
      content: "标题",
    },
  ],
});
```

方法二 页面中使用usSeoMeta

```typescript
useSeoMeta({
  title: `${anystr} - 我的神奇网站`,
  ogTitle: "我的神奇网站",
  description: "这是我的神奇网站，让我来告诉你关于它的一切。",
  ogDescription: "这是我的神奇网站，让我来告诉你关于它的一切。",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
```

pinia SSR 处理（页面中使用）

```typescript
const usersStore = useUsersStore();
usersStore.$patch((state) => {
  state.age = 200;
});
```

命令介绍

```bash
npm run dev         ----- 运行开发环境开发包
npm run test        ----- 运行测试环境开发包
npm run ptest       ----- 运行预发布环境开发包
npm run prod        ----- 运行生产环境开发包
npm run build       ----- 编译生产环境生产包
npm run build:dev   ----- 编译开发环境生产包
npm run build:test  ----- 编译测试环境生产包
npm run build:ptest ----- 编译预发布环境生产包
npm run build:prod  ----- 编译生产环境生产包
npm run server      ----- 运行build编译后的文件
npm run start       ----- build + server
npm run gen:css     ----- 编译antd的静态css（暂无作用）
npm run generate    ----- 编译静态文件
npm run preview     ----- 运行静态文件
```

目录说明

```
├── .nuxt  nuxt 默认文件，用来生成 Vue 应用程序
├── .output build后的生产文件夹
├── .vscode vscode编辑器配置文件
├── app nuxt配置文件夹
│   └── router.options.ts  路由配置文件
├── assets 构建工具会处理的所有网站资源
├── common 公共部分（需要手动引入）
│   ├── clientApi 客户端使用的api
│   ├── enum 枚举文件夹
│   └── model 模型文件夹
├── components 组件文件夹（自动引入）
│   ├── Layouts 布局页里面使用的组件
│   ├── SvgIcon svgIcon组件
│   └── UploadFile element上传文件组件
├── composables 可复用组合逻辑目录
│   └── useDebouncedRef.ts 自定义ref的防抖处理
├── dist 编译后的静态文件夹
├── layouts 布局文件夹
├── middleware 中间件 执行顺序从上到下的文件顺序执行 【.global 是全局中间件 其他的需要引入在router里面配置】（自动引入）
├── pages  页面文件夹
├── plugins 插件文件夹 一般用于vue全局注入使用 执行顺序从上到下的文件顺序执行（自动引入）
├── public 全局静态文件夹，一般是直接引入时使用
├── script 脚本，用于node脚本、nuxt配置使用
│   ├── antd antd 打包样式文件夹
│   ├── env nuxt配置使用
│   └── proxy nuxt的代理配置
├── server nuxt服务端的api请求使用（自动引入）
├── store 状态管理文件夹（需要手动引入）
├── types typescript 类型文件夹
├── utils 前端使用的工具类文件夹（自动引入）
│   ├── eventbus.ts 事件总线(mitt 全局的观察者)
│   ├── get-data.ts request请求分装
│   └── index.ts
├── .env 默认全局环境配置
├── .env.dev 开发环境配置
├── .env.prod 生产环境配置
├── .env.ptest 预发布环境配置
├── .env.test 测试环境配置
├── .eslintignore  eslint 排除文件
├── .eslintrc.js    eslint  配置
├── .gitignore git 排除文件
├── .nvmrc nvm 配置文件
├── app.vue app页面
├── Dockerfile docker 配置文件
├── error.vue 错误页面
├── nuxt.config.ts nuxt 配置文件
├── package-lock.json package 索文件
├── package.json package 配置文件
├── prettier.config.js  prettier配置
└── tsconfig.json typescripts配置文件
```
