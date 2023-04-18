## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```
# Component Collection

Collect some customized components

# vue-storybook

show components by storybook
## Add storybook

cd project_name

npx sb init

## run

yarn storybook or npm run storybook


## 目录结构

### 以下结构是初始化时自动生成的

├── .storybook
│ │── main.js //主文件
│ └── preview.js //预览设置文件
│
├─ src
│ └── stories
│ │ │── assets //静态资源文件夹
│ │ │── button.css //按钮样式文件
│ │ │── Button.jsx //按钮主文件
│ │ │── Button.stories.jsx //按钮文档页面
│ │ │── Introduction.stories.mdx //欢迎介绍页面，直接使用 mdx 文件,类似 Docz
│ │ └── .....

### 为了方便 UI 管理和使用习惯

在 src 下新建一个 compnents 文件夹，然后其中再以组件名文件夹分类，方便管理，如下：

├─ src
│ │──components
│ │ │── Button
│ │ │ │── Button.jsx // 组件
│ │ │ │── button.css
│ │ │ │── Button.stories.tsx
│ │ │── Header
│ │ │ │── Header.jsx // 组件
│ │ │ │── header.css
│ │ │ │── Header.stories.tsx
│ │ └── ... //参考上述文件夹
│ └── stories
│ │ │── assets //静态资源文件夹
│ │ │── Introduction.stories.mdx //欢迎介绍页面，直接使用 mdx 文件,类似 Docz
│ │ └── .....

