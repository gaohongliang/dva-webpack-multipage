# dva-webpack-multipage

## 说明

通过修改webpack设置使dva支持分块打包，目前由于项目历史因素没有开启hash文件名功能。

集成了react-redux-loading-bar顶部进度条，不过需要手动在页面添加一LoadingBar标签。

build.js定义分块打包的入口文件及发布路径等等。

## 调试运行
```bash
$ npm i
$ npm start
```
## 编译
```bash
$ npm run build
```
## 检查代码格式 eslint
```bash
$ npm run lint
```

## License

[MIT](https://tldrlegal.com/license/mit-license)