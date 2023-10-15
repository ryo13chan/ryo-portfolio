---
title: CSSでスクロールバーを非表示にする
createdAt: 2023-10-15
tags: ['css']
thumbnail: '/css.png'
---

## 領域をはみ出す要素の表示

`overflow`に`auto`や`scroll`を設定してスクロール形式にする

```html
<div class="container">
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
</div>

<style>
  .container {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    overflow-y: auto;
  }
</style>
```

<div class="container">
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
</div>

<style>
  .container {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    overflow-y: scroll;
  }
</style>

<br />

## スクロールバーの非表示

デザイン上、スクロールバーを非表示にしたいケースがある

CSS でプロパティを設定

ブラウザごとに設定が異なる

### Google Chrome, Safari, Microsoft Edge

```html
<style>
  .container::-webkit-scrollbar {
    display: none;
  }
</style>
```

### Firefox

```html
<style>
  .container {
    scrollbar-width: none;
  }
</style>
```

### まとめて設定

```html
<style>
  /* Firefox */
  .container {
    scrollbar-width: none;
  }
  /* Google Chrome, Safari, Microsoft Edge */
  .container::-webkit-scrollbar {
    display: none;
  }
</style>
```

<div class="container-hidden">
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
  <p>テキスト</p>
</div>

<style>
  .container-hidden {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .container-hidden::-webkit-scrollbar {
    display: none;
  }
</style>
