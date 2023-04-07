# 项目搭建配置之eslint

以 `react` + `vite` + `typescript` 项目为例，集成 `eslint` + `prettier` + `husky` + `lint-staged` 规范
项目仓库：https://github.com/iamzwq/eslint-demo
## 创建项目
```shell
pnpm create vite
```
## 添加 eslint
```shell
# npm
npm init @eslint/config
# pnpm
pnpm create @eslint/config
```
![](https://cdn.nlark.com/yuque/0/2023/png/680136/1679546458291-90132e79-2839-4fa2-a5df-495e3045490a.png)
按需选择完配置，安装成功后会自动创建`.eslintrc.cjs`配置文件。再根据具体项目添加修改配置。
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
```
`package.json` 文件中添加
```json
// package.json
"sricpts": {
  // ...
  "lint": "eslint src --ext .vue,.js,.ts,.jsx,.tsx --fix"
}
// ...
```
这个时候执行 `pnpm lint` 会报错
![](https://cdn.nlark.com/yuque/0/2023/png/680136/1679547469081-3096a493-7368-423c-a61f-f7c8fdf906b0.png)
需要我们在.eslintrc.cjs加上一个extends配置 `"plugin:react/jsx-runtime"`。

如果使用react hook写法，需要安装 `eslint-plugin-react-hooks` 插件，除了在extends加上 `"plugin:react-hooks/recommended"`，还要在 plugins 加上"react-hooks"

```javascript
extends: [
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react/jsx-runtime",
  "plugin:react-hooks/recommended",
  "plugin:@typescript-eslint/recommended",
],
plugins: ["react", "@typescript-eslint", "react-hooks"],
```
再 `pnpm lint`
![](https://cdn.nlark.com/yuque/0/2023/png/680136/1679547675717-a4f5333d-9247-4429-8e9d-1b59d8037774.png)
还有一个警告，需要我们在`.eslintrc.cjs`中加上这样的配置
```javascript
settings: {
  react: {
    version: "detect",
  },
},
```
以上就没有警告和报错了
## 添加 prettier
```shell
pnpm add prettier -D
```
然后再根目录创建`.prettierrc`配置文件，具体配置按需来
```json
// .prettierrc
{
  "semi": false,
  "singleQuote": false,
  "printWidth": 90,
  "useTabs": false,
  "tabWidth": 2,
  "bracketSpacing": true
}
```
添加 `.prettierignore` 配置文件
```
.DS_Store
node_modules
dist
dist-ssr

**/*.svg
**/*.sh
```
## ESLint + Prettier
```shell
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```
更改`.eslintrc.cjs`配置
```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error"
  },
};
```
## 添加 husky 和 lint-staged
```shell
pnpm add husky lint-staged -D


# 执行以下命令会生成 .husky 文件
npx husky install

npx husky add .husky/pre-commit "npx lint-staged"
```
然后在`package.json`文件中加上以下代码：
```json
"lint-staged": {
  "*.{vue,ts,js,jsx,tsx}": [
    "pnpm lint"
  ]
}
```
## vite.config.ts 配置
```shell
# 安装vite-plugin-eslint插件
pnpm add vite-plugin-eslint -D
```
```typescript
// vite.config.ts
import viteEslint from "vite-plugin-eslint"

plugins: [
  // ...
  viteEslint({
    failOnError: false,
  }),
],
```