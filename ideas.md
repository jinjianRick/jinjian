# 金健学术主页设计方案

## 方案一：学术极简主义 (Academic Minimalism)
<response>
<text>
**Design Movement**: 包豪斯功能主义 × 当代学术出版美学

**Core Principles**:
- 内容即设计：排版即视觉，无装饰元素
- 严格的网格系统，左对齐，强调信息层级
- 黑白主色调，仅用一种强调色标记重要信息
- 大量留白，段落间距遵循黄金比例

**Color Philosophy**:
- 主背景：纯白 #FFFFFF
- 正文：深炭灰 #1A1A2E
- 强调色：学术蓝 #1565C0（仅用于链接和标签）
- 分隔线：浅灰 #E8E8E8

**Layout Paradigm**:
- 单栏宽内容布局，左侧固定导航锚点
- 论文列表采用学术期刊排版风格
- 研究亮点用编号列表+缩进层级

**Signature Elements**:
- 细线分隔符（0.5px）
- 等宽字体用于机构名称
- 论文标签（CVPR/ECCV等）用小型大写字母

**Interaction Philosophy**:
- 悬停时下划线动画
- 平滑滚动到各章节
- 无多余动效，保持专注

**Animation**:
- 页面加载：内容从下方淡入（opacity 0→1，translateY 20px→0）
- 链接悬停：下划线从左向右展开

**Typography System**:
- 标题：Playfair Display（衬线，优雅学术感）
- 正文：Source Serif Pro（可读性强）
- 代码/机构：JetBrains Mono
</text>
<probability>0.07</probability>
</response>

## 方案二：现代研究者主页 (Modern Researcher Portfolio)
<response>
<text>
**Design Movement**: 新形态主义 × 科技感学术美学

**Core Principles**:
- 深色背景突出研究成果，营造专业科技感
- 卡片式布局，每个研究项目独立展示
- 渐变色彩强调研究方向分类
- 动态交互增强信息可读性

**Color Philosophy**:
- 主背景：深海蓝黑 #0D1B2A
- 次背景：#1B2B3A
- 主强调：电蓝 #00B4D8
- 次强调：紫罗兰 #7B2FBE
- 文字：#E8F4FD

**Layout Paradigm**:
- 顶部全屏 Hero，左侧个人信息，右侧研究方向可视化
- 论文列表用时间轴布局
- 研究亮点用展开卡片

**Signature Elements**:
- 粒子动效背景（轻量）
- 论文标签用发光效果
- 研究方向用彩色图标

**Interaction Philosophy**:
- 卡片悬停上浮效果
- 论文可展开查看摘要
- 平滑滚动+进度指示

**Animation**:
- 滚动触发的淡入动效
- 卡片悬停：box-shadow扩展+轻微上移

**Typography System**:
- 标题：Space Grotesk（现代几何感）
- 正文：DM Sans（清晰易读）
- 强调：Fira Code（等宽，技术感）
</text>
<probability>0.08</probability>
</response>

## 方案三：学术纸张质感 (Academic Paper Texture) ✓ 选择此方案
<response>
<text>
**Design Movement**: 新传统主义 × 当代学术期刊美学

**Core Principles**:
- 模拟高质量学术期刊的排版美感，但融入现代交互
- 不对称双栏布局：左侧窄栏固定导航，右侧宽栏内容
- 暖米色背景营造纸张质感，避免纯白的冷硬感
- 衬线字体与无衬线字体的精心搭配

**Color Philosophy**:
- 主背景：暖米白 #FAF8F5（羊皮纸感）
- 侧边栏：深橄榄绿 #2D3B2D（沉稳学术感）
- 正文：深棕黑 #1C1A17
- 强调色：学术红 #C0392B（仅用于重要标签和链接悬停）
- 次强调：金铜色 #B8860B（奖项和荣誉）
- 边框/分隔：#D4C9B8

**Layout Paradigm**:
- 固定左侧导航栏（宽约220px），右侧滚动内容区
- 论文列表采用带编号的学术引用格式
- 研究亮点采用带左边框的引用块样式
- Hero区域：姓名大字排版+简洁的个人信息行

**Signature Elements**:
- 细腻的纸张纹理背景（CSS实现）
- 论文标签（CVPR/ECCV等）用实心小方块前缀
- 章节标题左侧有细线装饰

**Interaction Philosophy**:
- 导航高亮跟随滚动位置
- 论文标题悬停显示下划线
- 平滑滚动，无过度动效

**Animation**:
- 页面加载：各章节依次淡入（stagger 0.1s）
- 导航项悬停：背景色过渡
- 论文卡片悬停：左边框颜色变化

**Typography System**:
- 主标题：Cormorant Garamond（优雅衬线，学术感）
- 章节标题：EB Garamond（经典学术衬线）
- 正文：Lora（可读性强的衬线体）
- UI标签：IBM Plex Sans（现代无衬线，形成对比）
- 代码/机构缩写：IBM Plex Mono
</text>
<probability>0.09</probability>
</response>

## 选定方案：方案三 - 学术纸张质感

选择理由：最适合学术主页的气质，既有传统学术的严谨感，又有现代网页的可读性和交互性。暖色调纸张背景与深色侧边栏的对比，形成独特的视觉层次。
