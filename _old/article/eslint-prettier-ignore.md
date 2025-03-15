---
title: ESLintとPrettierのignoreを同じ行に設定する
createdAt: 2024-05-25
tags: ['eslint', 'prettier']
thumbnail: '/programmer.png'
---

## ESLint と Prettier の ignore を同じ行に設定したい

コメントを 1 行にまとめると機能しない

```typescript
<script lang="ts" context="module">
  // ESLintのignoreが機能しない
  // prettier-ignore　eslint-disable-next-line @typescript-eslint/no-explicit-any
  type T = {[key: string]: any};
</script>

<script lang="ts" context="module">
  // Prettierのignoreが機能しない
  // eslint-disable-next-line @typescript-eslint/no-explicit-any prettier-ignore
  type T = {[key: string]: any};
</script>
```

<br />

## コメントを 複数行にする

```typescript
<script lang="ts" context="module">
  // prettier-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type T = {[key: string]: any};
</script>
```
