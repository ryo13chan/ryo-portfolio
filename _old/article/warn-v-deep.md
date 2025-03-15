---
title: 「::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead」のWarning対応
createdAt: 2023-09-05
tags: ['vuejs', 'css']
thumbnail: '/vuejs.png'
---

## ローカル環境で WARN

Vue3 のアプリをローカル環境で起動すると、

```zsh
WARN  [@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead.
```

が発生

deep セレクタの記法に変更が入ったらしい

<br />

## 対応

- `::v-deep`を`:deep()`に変更

### before

```css
::v-deep h2 {
  font-size: 1.5rem;
}

::v-deep .card {
  margin: 1rem;
}
```

### after

```css
:deep(h2) {
  font-size: 1.5rem;
}

:deep(.card) {
  margin: 1rem;
}
```

- WARN が消えること
- レイアウトに変化がないこと

を確認して問題なければ OK

<br />

## 参考

[https://github.com/vuejs/core/issues/4745](https://github.com/vuejs/core/issues/4745){:target="\_blank"}
