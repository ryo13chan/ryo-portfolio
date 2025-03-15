---
title: Dayjsで相対時間を表示する
createdAt: 2024-06-16
tags: ['javascript']
thumbnail: '/js.png'
---

## 「10 分前」、「２日前」などの相対時間を表示したい

SNS アプリなどで、現在時間と投稿時間の相対時間を表示させたい

```
// 現在日時
2024-06-16 13:00:00

// 投稿日時
2024-06-16 12:00:00

// 1時間前に投稿されたので「1時間前」を計算して表示する
```

<br />

## Dayjs の relativeTime プラグイン、fromNow を使用する

```typescript
import { locale, extend } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ja'
extend(relativeTime)
locale('ja')

// 投稿日時との相対時間をfromNowで取得
dayjs(post.createdAt).fromNow()
```
