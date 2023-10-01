---
title: Nuxt3の開発サーバー起動時に自動でブラウザで開く
createdAt: 2023-10-01
tags: ['nuxtjs']
thumbnail: '/nuxtjs.png'
---

## open オプションを指定

`--open, -o`を指定して起動

```sh
yarn dev -o
$ nuxt dev -o
```

### 事前に指定しておく

`package.json`

```json
  "scripts": {
    "dev": "nuxt dev -o",
  },
```

```sh
yarn dev
$ nuxt dev -o
```

<br />

## 参考

[https://nuxt.com/docs/api/commands/dev](https://nuxt.com/docs/api/commands/dev){:target="\_blank"}
