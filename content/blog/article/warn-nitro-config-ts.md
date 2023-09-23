---
title: 「Using nitro.config.ts is not supported together with Nuxt.」のWarning対応
createdAt: 2023-09-23
tags: ['nuxtjs']
thumbnail: '/nuxt.png'
---

## ローカル環境で WARN

Nuxtのバージョンを上げたら、下記のWarningが表示されるようになった

```zsh
WARN  Using nitro.config.ts is not supported together with Nuxt. Use options.nitro instead. 
```
`nitro.config.ts`ではなく`nuxt.config.ts`のoptionに設定するようになったらしい

<br />

## 対応
- nitro.config.tsを削除
- nuxt.config.tsに記述
```typescript
export default defineNuxtConfig({
  nitro: {
    // 設定
  }
})
```

- サーバー再起動してWarningが消えることを確認

<br />

## 参考

[https://nuxt.com/docs/api/configuration/nuxt-config#nitro](https://nuxt.com/docs/api/configuration/nuxt-config#nitro){:target="\_blank"}
