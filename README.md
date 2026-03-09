# Travel Map - 中国及台湾地区旅游景点动态推荐地图 🌏

这是一个基于 **Vite + Vanilla JS + 高德地图 API** 构建的三维交互式旅游地图 Web 应用。应用采用具有高级质感的极简深色系与玻璃拟态 (Glassmorphism) 风格设计，支持根据 1-12 月份动态切换和高亮展示全中国及台湾省各地的时令旅游胜地。

---

## ✨ 功能亮点

- 🎨 **高级美学 UI**：深色定制地图底座 + 极致毛玻璃面板及 InfoCard 设计，动画平滑细腻。
- 🗓 **月份维度探索**：底部配备平滑的时间轴（Timeline），点击不同月份，地图上的热门景点标记 (Marker) 将有独特的入场和退场动画。
- 🚁 **智能视角平移**：选中不同月份或单个景点时，高德 3D 地图引擎会自动根据点位集合边界（FitView）进行视角的平滑缩放与追踪对齐。
- 🔐 **安全密匙管理**：采用环境变量动态注入敏感配置 `%VITE_AMAP_...%`，完全适配 CI/CD 一键部署需求，代码无密钥硬编码。

## 🛠 技术栈

| 模块 | 技术选型 |
| --- | --- |
| 核心框架 | 原生 HTML + JS + CSS (Vanilla) |
| 构建工具 | Vite |
| 地图引擎 | AMap 高德地图 API v2.0 |

## 🚀 快速开始

### 1. 前置准备

在运行本项目之前，您需要前往 [高德开放平台](https://console.amap.com/) 注册成为开发者，并创建 **Web端 (JS API)** 应用以获取您的 API Key 和 安全密钥（SecurityJsCode）。

### 2. 克隆仓库与安装依赖

```bash
git clone https://github.com/xiaoerqiu/travel-map.git
cd travel-map
npm install
```

### 3. 配置环境变量

复制环境配置文件表准模板，并填入您的真实密钥：

```bash
cp .env.example .env.local
```

修改 `.env.local` 文件：
```env
VITE_AMAP_SECURITY_CODE=这里填入您的安全密钥_SecurityJsCode
VITE_AMAP_KEY=这里填入您的_API_KEY
```

### 4. 本地运行开发服务

```bash
npm run dev
```
启动后在控制台给出的地址 (如 `http://localhost:3000`) 即可预览全景地图。

## ☁️ 生产部署 (支持 Zeabur 一键部署)

本项目在开发时考虑了开箱即用的 PaaS 平台兼容性。您可以非常轻易地将本项目一键部署至 [Zeabur](https://zeabur.com/)。

1. 在 Zeabur 仪表板中以 GitHub 仓库身份导入本仓库 `xiaoerqiu/travel-map`。
2. Zeabur 会自动识别到基于 Vite 的项目结构并触发 `npm run build`。
3. **重要提示**：在部署开始前或者服务设置中，请进入对应服务的 **环境变量 (Environment Variables)** 选项卡，添加如下两个键值对（同本地 `.env.local`）：
   - `VITE_AMAP_SECURITY_CODE`: 填入您的安全密钥
   - `VITE_AMAP_KEY`: 填入您的 API Key
4. 配置完成重新部署部署后，Zeabur 将正确注入环境变量，分配线上域名供外界访问。

## 🤝 贡献与反馈

如果您有任何有趣的想法，欢迎提交 Issue 或 Pull Request。感谢你的关注！