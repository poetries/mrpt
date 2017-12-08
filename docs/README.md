配置路径
---

- 当页面嵌套过深时我们会发现在路径通常都要这么写 `import xx from './../../../xxx/qqq'` 
- 通过配置`webpack`可以写成 `import xx from '@/xxx/qqq'`

```bash
// 修改 webpack.config.dev 与 webpack.config.prod 两个文件 加入相同配置

...

// 修改
alias: {
      'react-native': 'react-native-web',
        // +++ 加入配置
      '@': resolve('src')
}
```

- 优点: 如果按照相对路径的方法引用，每次要计算.. 并且文件一旦迁移 那么又要重新计算，如此配置文件迁移也不需要计算
- 缺点: 在部分编辑器可能会失去文件引用高亮(比如webstrom), 并且不能通过快捷键快速查找其引用

按需引用atnd-mobile
---

> 先安装 babel-plugin-import

```bash
npm i babel-plugin-import -D
```

```bash
 // pageage.json 文件
  "babel": {
    "presets": [
      "react-app"
    ],
    // 加入配置
    "plugins": [
      ["import", { "libraryName": "antd-mobile", "style": "css" }]
    ]
  },
```

支持装饰器写法
---

```bash
npm install --save-dev babel-plugin-transform-decorators-legacy
```

```bash
//  pageage.json 文件 在刚刚配置 ant 下面加上

"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ...ant配置,
      // 加入配置
      "transform-decorators-legacy"
    ]
  }
```