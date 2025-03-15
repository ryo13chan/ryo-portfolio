---
title: codeコマンドでVSCodeを開く
createdAt: 2023-12-10
tags: ['vscode']
thumbnail: '/vscode.png'
---

## 指定のフォルダを VSCode で開きたい

```sh
# クローン
git clone git@github.com:ryo13chan/ryo-portfolio.git
cd ryo-portfolio

# VSCode上からフォルダを指定して開くのが面倒
```

<br />

## VSCode で code コマンドを有効化

デフォルトは無効

```sh
code
> zsh: command not found: code
```

<br />

コマンドパレッドで`> shell command: install 'code' command in PATH`を入力してインストール

<br />

## code を実行

### VSCode を起動

```sh
code
```

### 指定のフォルダを開く

```sh
code ~/ryo-portfolio
```
