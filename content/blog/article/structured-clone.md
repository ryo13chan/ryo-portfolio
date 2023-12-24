---
title: structuredCloneでオブジェクトのディープコピー
createdAt: 2023-12-17
tags: ['javascript']
thumbnail: '/js.png'
---

## オブジェクトをコピーしたい

```javascript
const user1 = {
  id: 1,
  name: 'テスト太郎',
  profile: {
    nickname: '太郎ちゃん',
  },
}

// user1を元にuserを作りたい
```

<br />

### シャローコピー

```javascript
// スプレッド構文で作成
const user2 = { ...user1 }
user2.id = 2
user2.name = 'テスト花子'
user2.profile.nickname = '花子ちゃん'

// Object.assignで作成
const user3 = Object.assign({}, user1)
user3.id = 3
user3.name = 'テスト次郎'
user3.profile.nickname = '次郎'

console.log(user1)
console.log(user2)
console.log(user3)

// 第2階層が参照渡しのため、コピー元に影響する
/*
{
  id: 1,
  name: "テスト太郎",
  profile: {
    nickname: "次郎" // id: 3の内容で上書きされる
  }
}
{
  id: 2,
  name: "テスト花子",
  profile: {
    nickname: "次郎" // id: 3の内容で上書きされる
  }
}
{
  id: 3,
  name: "テスト次郎",
  profile: {
    nickname: "次郎"
  }
}
*/
```

<br />

### ディープコピー

```javascript
// オブジェクトを文字列してJSONに戻す
const user2 = JSON.parse(JSON.stringify(user1))
user2.id = 2
user2.name = 'テスト花子'
user2.profile.nickname = '花子ちゃん'

console.log(user1)
console.log(user2)

/*
{
  id: 1,
  name: "テスト太郎",
  profile: {
    nickname: "太郎くん" // 上書きされていない
  }
}
{
  id: 2,
  name: "テスト花子",
  profile: {
    nickname: "花子ちゃん"
  }
}
*/
```

<br />

## structuredClone を使う

こちらの方が直感的で良い

```javascript
const user2 = structuredClone(user1)
user2.id = 2
user2.name = 'テスト花子'
user2.profile.nickname = '花子ちゃん'

console.log(user1)
console.log(user2)

/*
{
  id: 1,
  name: "テスト太郎",
  profile: {
    nickname: "太郎くん" // 上書きされていない
  }
}
{
  id: 2,
  name: "テスト花子",
  profile: {
    nickname: "花子ちゃん"
  }
}
*/
```
