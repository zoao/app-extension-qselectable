<template>
  <div>
    <section class="page-header">
      <div class="text-h1 project-name">QSelectable</div>
      <div class="text-h2 project-tagline">Selectable elements</div>
      <div class="byline">Created and maintained by João Martins</div>
      <div class="quasar">A Quasar Framework App Extension</div>
    </section>
    <main class="flex flex-start justify-center inset-shadow">
      <div class="q-pa-md col-12-sm col-8-md col-6-lg inset-shadow" style="width: 100%; height: 3px;" />
      <div class="q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1" style="max-width: 800px; width: 100%;">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
