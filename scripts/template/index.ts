import pkg from "../../package.json";

export const templateDoc = (svgNames: string) => `
# Xtify Icons
## How to use 
\`\`\`shell
npm add xtify-icons@git+https://github.com/Xtify-team/xtify-icons.git
\`\`\`
### In React

\`\`\`jsx
import {XtifyIconAvatar} from '${pkg.name}';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <XtifyIconAvatar></XtifyIconAvatar>
    </React.StrictMode>,
);
\`\`\`
### 图标详情
|图标名|图标样式|\n|---|---|\n${svgNames}`;
