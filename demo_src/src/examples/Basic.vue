<template>
<div class="sample q-pa-md">
  <p class="desc text-subtitle1">Single selection if v-model not is Array</p>
  <div class="row items-start q-gutter-md">
    <q-selectable v-model="selected" val="Image2"> 
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image3">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image4">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>
  </div>

  <p class="desc text-subtitle1">Multi-selection if v-model is Array</p>
  <div class="row items-start q-gutter-md">
    <q-selectable v-model="selectedValues" val="Image2"> 
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selectedValues" val="Image3">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selectedValues" val="Image4">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      selected: "Image3",
      selectedValues: []
    }
  }
}
</script>

