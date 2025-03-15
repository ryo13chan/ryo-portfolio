---
title: JavaScriptで任意の数でループ処理
createdAt: 2023-06-27
tags: ['javascript']
thumbnail: '/js.png'
---

## 任意の数でループしたい

特定の処理を複数回実行したい場合に、任意の数でループ処理を実行したいケースがある

```javascript
console.log('1回目のHello, World!')
console.log('2回目のHello, World!')
console.log('3回目のHello, World!')
console.log('4回目のHello, World!')
console.log('5回目のHello, World!')
```

<br />

## for 文を使う

```javascript
for (i = 1; i <= 5; i++) {
  console.log(`${i}回目のHello, World!`)
}
```

<br />

## Array を使う

### スプレッド構文

```javascript
[...Array(5)].forEach((_, i) => console.log(`${i + 1}回目のHello, World!`))
```

### fill()

```javascript
Array(5).fill().forEach((_, i) => console.log(`${i + 1}回目のHello, World!`))
```

### from()

```javascript
Array.from({ length: 5 }).forEach((_, i) => console.log(`${i + 1}回目のHello, World!`))
```
