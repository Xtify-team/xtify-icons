## 使用方式 (vite)
```ts
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {vitePluginsXtifyIcons} from 'vite-plugin-xtify-icons';

export default defineConfig({
  base: "./",
  plugins: [
    vitePluginsXtifyIcons({}),
    react()
  ]
});
```

```tsx
import {XtifyIcons#[CamelCase]} from 'virtual:xtify-icons';
const Example = ()=>{
    // XtifyIcons#[CamelCase] CamelCase 是指icons 名字转为 CamelCase 格式
    // 也即是 原: json-formatter XtifyIcon结果：XtifyIconJsonFormatter
    return <XtifyIcons#[CamelCase]></XtifyIcons#[CamelCase]>
}

// or
import XtifyIcons from 'virtual:xtify-icons';

const Example2 = ()=>{
    return <XtifyIcons name="#[CamelCase]"></XtifyIcons>
}
```