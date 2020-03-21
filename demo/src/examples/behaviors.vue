<template>
<div>
  <p class="text-subtitle1">Disable items</p>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selected" val="Image2"> 
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image3" disable>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image4">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>
    </div>

<p class="text-subtitle1">Long press for first selection, and show unselected icon only if one is selected</p>
<div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selected2" val="Image5" :longPressFirstSelection="600" onlyShowUnselectedIconIfOneSel>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected2" val="Image6" :longPressFirstSelection="600" onlyShowUnselectedIconIfOneSel>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>
    </q-selectable>

    <q-selectable v-model="selected2" val="Image7" :longPressFirstSelection="600" onlyShowUnselectedIconIfOneSel>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>
    </q-selectable>
  </div>

  <p class="text-subtitle1">No user interaction, only select by code. Property: manual = true</p>
  <div class="q-pa-md items-start q-gutter-md">
    <q-btn @click="selected3 = 'Image5'">Select 1 image</q-btn>
    <q-btn @click="selected3 = 'Image7'">Select 3 image</q-btn>
    <q-btn @click="selected3 = null">uncheck All</q-btn>
  </div>
<div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selected3" val="Image5" manual unselectedIcon>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected3" val="Image6" manual unselectedIcon>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>
    </q-selectable>

    <q-selectable v-model="selected3" val="Image7" manual unselectedIcon>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>
    </q-selectable>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      selected2: [],
      selected3: null
    }
  }
}
</script>

<style scoped lang="scss">
.image7.selected{
  outline: 4px $primary solid;
}
</style>