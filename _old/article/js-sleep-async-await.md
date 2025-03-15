---
title: JavaScriptのsleep処理を１行で実装
createdAt: 2023-09-30
tags: ['javascript']
thumbnail: '/js.png'
---

## よくある事例

```javascript
const sleepTest = () => {
  console.log('start')

  // 一定時間待機させたい

  console.log('end')
}
```

<br />

## JavaScript には sleep 関数がない

何故だ。。。

<br />

## async/await と setTimeout を使用して実現

```javascript
const sleepTest = async () => {
  console.log('start')

  // 3秒sleep
  await new Promise((resolve) => setTimeout(resolve, 3000))

  console.log('end')
}
```

<br />

## 関数化

```javascript
// 指定ミリ秒sleep
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const sleepTest = async () => {
  console.log('start1')
  await sleep(2000)
  console.log('end1')

  console.log('start2')
  await sleep(2000)
  console.log('end2')
}
```
