import { extractStyle } from "ant-design-vue/lib/_util/static-style-extract";

import { ConfigProvider, StyleProvider } from "ant-design-vue";
import { h } from "vue";
import fsExtra from "fs-extra";
import { lightTheme } from "./theme/light";
import { darkTheme } from "./theme/dark";

export const genAntdStyle = async () => {
  await fsExtra.outputFile(
    "public/styles/and/theme/dark.css",
    extractStyle((node) =>
      h(
        StyleProvider,
        { hashPriority: "high" },
        {
          default: () =>
            h(ConfigProvider, { theme: darkTheme }, { default: () => node }),
        }
      )
    ),
    "utf8"
  );
  await fsExtra.outputFile(
    "public/styles/and/theme/light.css",
    extractStyle((node) =>
      h(
        StyleProvider,
        { hashPriority: "high" },
        {
          default: () =>
            h(ConfigProvider, { theme: lightTheme }, { default: () => node }),
        }
      )
    ),
    "utf8"
  );
};
