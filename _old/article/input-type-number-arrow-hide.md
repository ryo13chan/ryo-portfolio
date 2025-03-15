---
title: input type="number"の矢印を非表示にする
createdAt: 2024-01-06
tags: ['css', 'html']
thumbnail: '/css.png'
---

## 数値入力の矢印を非表示にしたい

レイアウトの都合上、非表示にしたいケースがある

<div class="mr-3 mb-1 font-bold">個数</div>
<input type="number" />

```html
<input type="number" />
```

<br />

## CSS で指定

<div class="mr-3 mb-1 font-bold">個数</div>
<input type="number" class="arrow-hide" />

```html
<input type="number" class="arrow-hide" />
```

```css
/* Chrome, Safari */
.arrow-hide::-webkit-outer-spin-button,
.arrow-hide::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
/* FireFox */
.arrow-hide {
  -moz-appearance: textfield;
}
```

<style scoped>
/* Chrome, Safari */
.arrow-hide::-webkit-outer-spin-button,
.arrow-hide::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
}
/* FireFox */
.arrow-hide {
  -moz-appearance: textfield;
}
</style>
