# Terra Chronicle 大地编年史

农场经营 × 灵兽养成 × 卡牌锻造 × 大陆地缘博弈的多人联机网页游戏。

## 当前状态（v0 · 2026-06-12）

- **在线预览**：`http://<本机>:8866/prototype/index.html`（pm2 进程 `terra-chronicle`）
- `docs/core-systems-v0.1.md` — 核心系统深化设计（美术铁律 / 地块状态向量 / 灵兽三役 / 锻造经济 / 流域外溢 / 联机架构）
- `assets/concept/` — 首批 AI 概念图（gpt-image-2）：主视觉、灵兽进化、UI styleframe、卡牌模板
- `prototype/index.html` — 单文件「活地图」视觉原型，零构建依赖
- `tools/gen_image.sh` — 概念图生成脚本（ai.input.im / gpt-image-2）
- `tools/shoot.js` — Playwright 截图回归脚本（chromium-1208 本机路径）
- `shots/` — 验证截图

## 原型操作

- 点击「踏上大陆」：云幕转场 + 镜头降落
- 点击任意地块：弹簧侧栏显示地籍四维（肥力/湿度/虫害/灵脉）
- 按 `1-4` 跳转季节，按 `F` 切换 10 倍时光流速
- 右下角卡牌：3D 悬停倾斜

## 原型已实现的视觉系统

四季连续调色插值（非贴图切换）· 昼夜光照与暮金时刻 · 季节粒子（樱瓣/夏雨萤火/落叶/雪）· 云影漂移 · 悬浮岛崖壁 · 春樱树冠 · 作物随季生长 · 屋舍夜灯与炊烟 · 弹簧物理 UI · 数值滚动动画
