// 入口文件列表
const path = require('path');

// 工程根目录名，更换项目时修改
const PROJECT_NAME = 'yhhx';

const ROOT_PATH = path.resolve(__dirname);
const PAGES_PATH = path.resolve(ROOT_PATH, 'src/pages');
const TEMPLATE_PATH = path.resolve(ROOT_PATH, 'src/html/template.html');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'dist');
const PUBLIC_PATH = `/${PROJECT_NAME}/dist/`;

// pages增加一个模块配置一个属性
module.exports = {
  pages: {
    hxpz: {
      entry: path.resolve(PAGES_PATH, 'hxpz/hxpz.js'),
      title: '画像配置',
    },
    hxzs: {
      entry: path.resolve(PAGES_PATH, 'hxzs/hxzs.js'),
      title: '画像展示',
    },
  },
  template: TEMPLATE_PATH,
  output: OUTPUT_PATH,
  publicPath: PUBLIC_PATH,
};
