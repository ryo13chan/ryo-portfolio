---
title: 配列の重複チェック
createdAt: 2023-12-24
tags: ['javascript']
thumbnail: '/js.png'
---

## 配列の要素が重複しているかチェックしたい

```javascript
// 重複する可能性のある配列
const ids = [1, 2, 3, 3, 4]
```

<br />

## Set を使う

```javascript
const ids = [1, 2, 3, 3, 4]

// Setで重複する値を削除
const setIds = new Set(ids)
console.log(setIds)
// [1, 2, 3, 4]

// 元の配列の長さと重複を削除した後の長さを比較
// 一致しない場合は重複が削除されている＝重複がある
const deplicated = ids.length !== setIds.size
console.log(deplicated)
// false

const uniqueIds = [1, 2, 3, 4]
const setUniqueIds = new Set(uniqueIds)
console.log(uniqueIds.length !== setUniqueIds.size)
// false
```
