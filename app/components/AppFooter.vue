<template>
  <footer class="h-24 py-4">
    <div class="flex justify-center gap-4">
      <Button
        icon="pi pi-github"
        variant="text"
        severity="secondary"
        rounded
        as="a"
        href="https://github.com/ryo13chan"
        target="_blank"
      />
      <Button
        icon="pi pi-twitter"
        variant="text"
        severity="secondary"
        rounded
        as="a"
        href="https://twitter.com/ryo_chan_13"
        target="_blank"
      />
    </div>
    <div class="text-center">
      {{ `© Ryo ${$dayjs().year()}` }}
    </div>
  </footer>
</template>
