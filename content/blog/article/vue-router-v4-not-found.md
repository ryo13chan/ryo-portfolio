---
title: Vue Router v4でpathに*が使用できなくなっていた
createdAt: 2023-06-17
tags: ['javascript', 'vuejs']
thumbnail: '/programmer.png'
---

## Vue Router V4 で 404 ページを作成

ページコンポーネントの`NotFoundPage.vue`を作成

`router/index.ts`に 404 ページ用のルートを追加

```javascript
    // 一番下に追加、その他全てに合致させる
    {
      path: '*',
      name: 'notFound',
      component: () => import('@/pages/NotFoundPage.vue'),
    }
```

しかし、下記コンソールエラーが発生

`Uncaught Error: Catch all routes ("*") must now be defined using a param with a custom regexp.`

<br />

## pathMatch に変更

公式ドキュメントによると、代わりに`pathMatch`を使用するとのこと

[https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route](https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route){:target="\_blank"}

```javascript
    {
      path: '/:pathMatch(.*)*', // 変更
      name: 'notFound',
      component: () => import('@/pages/NotFoundPage.vue'),
    }
```

存在しないページにアクセスして 404 ページが表示されたら OK
