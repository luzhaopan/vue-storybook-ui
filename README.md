# vue-pro

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
npm run dev

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 访问路径

1、看板
http://localhost:8080/#/dashboard

2、设备用时分析
http://localhost:8080/#/equipment

3、生产追溯
http://localhost:8080/#/production

3、生产实况看板
http://localhost:8080/#/realProInfo

### 请求时间

1.改变场景切换时间
路径：src\views\index.vue
修改该目录下的 mounted()函数里 n 变量值

2.设备用时接口请求时间
路径：src\components\EquipmentInfo.vue
修改该目录下的 mounted()函数里 n 变量值

3.生产实况看板接口请求时间
路径：src\views\realProInfo\index.vue
修改该目录下的 mounted()函数里 n 变量值
