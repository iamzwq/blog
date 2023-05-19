# nvm,npm,yarn 相关命令

## 1. npm/yarn
```bash
# 查看npm, yarn全局安装路径
npm root -g
yarn global dir

# 查看npm全局安装的包
npm list -g --depth 0

# 查看npm的缓存位置
npm config get cache

# 查看npm, yarn的位置
npm bin -g
yarn global bin

# 查看包版本
npm view jquery
npm view jquery version  # 最新版本
npm view jquery versions  # 所有版本
npm ls jquery  # 自己安装的版本

# 设置镜像源
npm config set registry https://registry.npm.taobao.org # 持久使用
npm install xx --registry https://registry.npm.taobao.org # 临时使用

# 通过cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 2. nvm
```bash
# 查看可用的node版本
nvm ls-remote # mac
nvm list available # win
```