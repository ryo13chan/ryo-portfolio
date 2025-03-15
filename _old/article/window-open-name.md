---
title: window.openで同じ画面が複数開かないように上書きする
createdAt: 2024-06-30
tags: ['javascript']
thumbnail: '/js.png'
---

## window.open で外部サイトを開く

```javascript
window.open('https://www.google.com/search?q=javascript')
```

<br />

## 同じ画面が複数開かないようしたい

```
<button onclick={onButtonClick} />

// 複数回クリックされるとその分開く
// 既に開いている場合は上書きしたい
const onButtonClick = () => {
  window.open('https://www.google.com/search?q=javascript')
}
```

<br />

## target にウィンドウ名を設定する

```
// 引数の2番目にウィンドウ名を設定
window.open('https://www.google.com/search?q=javascript', 'google-js')
```

※`_self`、`_blank`、`_parent`、`_top`などの特殊な target キーワードは避ける

※同一ウィンドウ内のタブのみ有効
