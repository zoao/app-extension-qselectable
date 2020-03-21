<template>
  <q-list>
    <q-item clickable to="/docs">
      <q-item-section avatar>
        <q-icon name="bolt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Documentation</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      tag="a"
      target="_blank"
      href="https://github.com/zoao/app-extension-qselectable"
    >
      <q-item-section avatar>
        <q-icon name="extension" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Github source code</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable tag="a" target="_blank" href="http://quasar.dev">
      <q-item-section avatar>
        <q-icon name="school"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>Quasar framework</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'EssentailLinks',
  data () {
    return {}
  }
}
</script>

<style>
</style>
