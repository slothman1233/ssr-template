// composables/getData.ts
import type { NitroFetchRequest } from "nitropack";
import type { FetchOptions } from "ofetch";
// import { showToast, showLoadingToast, closeToast } from 'vant';

interface Params {
  url: NitroFetchRequest;
  opts: FetchOptions<any>;
  method?: "get" | "post";
  contentType?: "application/x-www-form-urlencoded" | "application/json";
}

let loadingCount = 0;

// 转换动态接口，兼容类似'/article/:id'这样的动态接口
const replacePathVariables = (url: NitroFetchRequest, params: any = {}) => {
  if (Object.keys(params).length === 0) {
    return url;
  }
  const regex = /\/:(\w+)/gm;
  let formattedURL = url as string;
  let m = regex.exec(formattedURL);
  while (m) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex += 1;
    }
    if (params[m[1]] === undefined) {
      throw new Error(`"${m[1]}" is not provided in params`);
    }
    formattedURL = formattedURL.replace(`:${m[1]}`, params[m[1]]);
    delete params[m[1]];
    m = regex.exec(formattedURL);
  }
  return formattedURL;
};

export async function getFetchData({
  url,
  opts,
  method = "get",
  contentType = "application/json",
}: Params) {
  // 解决刷新页面useFetch无返回
  if (nextTick) await nextTick();

  const config = useRuntimeConfig();
  const requestURL = replacePathVariables(url, opts);
  const { data } = await useFetch(requestURL, {
    method,
    // ofetch库会自动识别请求地址，对于url已包含域名的请求不会再拼接baseURL
    baseURL: config.public.NUXT_C_BASE_URL,
    // onRequest相当于请求拦截
    onRequest({ request, options }) {
      // 设置请求头
      options.headers = { "Content-Type": contentType };
      // 设置请求参数
      if (method === "post") {
        options.body = { ...opts };
      } else {
        options.query = { ...opts };
      }
      if (loadingCount === 0) {
        // showLoadingToast({ forbidClick: true });
      }
      loadingCount++;
    },
    // onResponse相当于响应拦截
    onResponse({ response }) {
      // 处理响应数据
      loadingCount--;
      if (loadingCount === 0) {
        // closeToast();
      }
      if (response._data.error) {
        console.warn(
          "=== error url: ",
          url,
          "\n params:",
          opts,
          "\n response:",
          response._data
        );
        // showToast(response._data.message);
      } else {
        return response;
      }
    },
    onRequestError({ request, options, error }) {
      // 处理请求错误
      // console.warn('request error', error);
      // showToast('Request Error');
    },
    onResponseError({ request, response, options }) {
      // 处理响应错误
      // console.warn('request error', response);
      // showToast('Request Error');
    },
  });
  // 这里data本身是个ref对象，将其内部值抛出去方便调用时获得数据。
  return data.value;
}
