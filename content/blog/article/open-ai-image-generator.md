---
title: OpenAI API + Vue.jsで画像作成アプリを作る
createdAt: 2023-04-09
tags: ['openai', 'javascript', 'vuejs']
thumbnail: '/programmer.png'
---

## はじめに

[OpenAI API](https://openai.com/blog/openai-api){:target="\_blank"} では、`DALL·E`という画像生成モデルを使用した画像生成用の API`Image generation`（beta 版）が提供されている

<br />

ChatGPT にも教えてもらった

```
OpenAI APIの画像生成機能は、人工知能を使用して、与えられたテキストの説明に基づいて、自動的に画像を生成する機能です。
たとえば、「夕暮れの風景」という説明を与えると、OpenAI APIはそのイメージを生成し、その説明に最も適した画像を提供することができます。

この機能は、ゲームや映画などの映像制作、マーケティングや広告の画像制作、アート作品やエンターテイメントの制作など、多くの場面で活用されています。
また、研究分野においても、画像生成技術を用いた新しい知見の発見や、新しいアイデアの創出に役立てられています。

OpenAI APIの画像生成機能は、APIを使用するためには、APIキーの取得や課金が必要です。
一度APIキーを取得したら、APIを使用するプログラムを開発することで、独自の画像生成システムを構築することができます。
```

<br />

また、API では以下の機能が提供されている

- テキスト プロンプトに基づいてゼロからイメージを作成する
- 新しいテキスト プロンプトに基づく既存の画像の編集の作成
- 既存の画像のバリエーションを作成する

<br />

今回は、

`テキスト プロンプトに基づいてゼロからイメージを作成する`

を使用して、フォームの入力内容に基づいた画像を生成するアプリを Vue.js で作成する

<br />

## 料金体系

[https://openai.com/pricing#:~:text=Other%20models-,Image%20models,-Build%20DALL%C2%B7E%20directly](https://openai.com/pricing#:~:text=Other%20models-,Image%20models,-Build%20DALL%C2%B7E%20directly){:target="\_blank"}

| 解像度    | 価格   |
| :-------- | :----- |
| 1024×1024 | $0.020 |
| 512×512   | $0.018 |
| 256×256   | $0.016 |

1 枚あたり約 20 円、結構高い

<br />

## 事前準備

- OpenAI API キーの発行
- 開発環境の作成
  - 割愛

<br />

## まずは Curl で API を試してみる

```bash
curl https://api.openai.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer APIキー" \
  -d '{
    "prompt": "青い鳥",
    "n": 1,
    "size": "256x256"
  }'
```

成功するとレスポンスが返ってくるので、data 内の url にアクセス

```
{
  "created": 1681110572,
  "data": [
    {
      "url": 画像URL
    }
  ]
}
```

指定した画像が生成されている

![生成画像](/open-ai-image-generator/blue-bird.png '生成画像')

<br />

## 簡単なフォーム作成

- API キー
- 生成したい画像の命令文

![フォーム](/open-ai-image-generator/form1.png 'フォーム')

## JavaScript で API を実行

### 実行用関数を作成

```javascript
async createImage(apiKey, prompt) {
  const configuration = new Configuration({
    apiKey,
  })
  const openai = new OpenAIApi(configuration)
  const request: CreateImageRequest = { prompt }

  const response = await openai.createImage(request)
  this.images.unshift({ prompt, ...response.data })
},
```

Generate ボタン押下で実行

```javascript
const generate = async () => {
  try {
    isLoading.value = true
    await createImage(apiKey.value, prompt.value)
  } catch {
    alert('Failed to generate image')
  } finally {
    isLoading.value = false
  }
}
```

<br />

### 実行結果を確認

![フォーム](/open-ai-image-generator/form2.png 'フォーム')

指定した条件で画像が生成されている

<br />

## 詳細条件を指定できるようにする

- 生成する枚数
- 解像度

の条件を追加

```javascript
async createImage(
  apiKey,
  prompt,
  n = 1, // 枚数
  size = CreateImageRequestSizeEnum._256x256 // 解像度
) {
  const configuration = new Configuration({
    apiKey,
  })
  const openai = new OpenAIApi(configuration)
  const request: CreateImageRequest = { prompt, n, size }

  const response = await openai.createImage(request)
  this.images.unshift({ prompt, ...response.data })
},
```

```javascript
const generate = async () => {
  try {
    isLoading.value = true
    // 枚数、解像度を追加
    await createImage(apiKey.value, prompt.value, number.value, size.value)
  } catch {
    alert('Failed to generate image')
  } finally {
    isLoading.value = false
  }
}
```

<br />

フォームも追加

![フォーム](/open-ai-image-generator/form3.png 'フォーム')

<br />

## 完成

![フォーム](/open-ai-image-generator/form4.png 'フォーム')

コードはこちら

[https://github.com/ryo13chan/ryo-portfolio/blob/master/pages/works/open-ai-image-generator.vue](https://github.com/ryo13chan/ryo-portfolio/blob/master/pages/works/open-ai-image-generator.vue){:target="\_blank"}
