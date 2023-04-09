---
title: OpenAI API「used to set unsafe header "User-Agent”」エラー対応
createdAt: 2022-04-09
tags: ['openai', 'javascript']
thumbnail: '/programmer.png'
---

## OpenAI API でエラー発生

[API リファレンス](https://platform.openai.com/docs/api-reference/introduction){:target="\_blank"}を参考に JavaScript で Open AI を使用してみたところ、

`Refused to set unsafe header "User-Agent"`

のコンソールエラーが発生する

API の実行に問題は無いが、気持ち悪いので解消したい

<br />

## 対応

- User-Agent を削除する

```javascript
const configuration = new Configuration({
  apiKey: 'APIキー',
})
delete configuration.baseOptions.headers['User-Agent'] // 追加
const openai = new OpenAIApi(configuration)
```

### 参考

[https://github.com/openai/openai-node/issues/6](https://github.com/openai/openai-node/issues/6){:target="\_blank"}
