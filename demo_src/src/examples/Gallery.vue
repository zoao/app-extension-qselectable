<template>
<div>
  <p class="text-subtitle1">Gallery sample. Zoom with <a href="https://quasarframework.github.io/app-extension-qzoom/">QZoom extension</a></p>

<p class="text-subtitle1">1. Long press, to select elements</p>
  
  <div class="q-pa-md items-start q-gutter-md">
    <q-btn @click="selectedValues= []">uncheck All</q-btn>
    <q-toggle v-model="showUnselectedIcon" label="Show unchecked icon" left-label />
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selectedValues" val="Image2" :longPressFirstSelection="600" :onlyShowUnselectedIconIfOneSel="!showUnselectedIcon" style="width: 180px;"> 
      <q-zoom background-color="blue-grey-1" :manual="selectedValues.length > 0">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />
      </q-zoom>
    </q-selectable>

    <q-selectable v-model="selectedValues" val="Image3" :longPressFirstSelection="600" :onlyShowUnselectedIconIfOneSel="!showUnselectedIcon" style="width: 180px;">
      <q-zoom background-color="blue-grey-1" :manual="selectedValues.length > 0">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>
      </q-zoom>
    </q-selectable>

    <q-selectable v-model="selectedValues" val="Image4" :longPressFirstSelection="600" :onlyShowUnselectedIconIfOneSel="!showUnselectedIcon" style="width: 180px;">
      <q-zoom background-color="blue-grey-1" :manual="selectedValues.length > 0">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>
      </q-zoom>
    </q-selectable>
  </div>
    <p class="text-subtitle1">2. Only icon is selectable</p>
<div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selectedValues2" val="Image5" style="width: 180px;" onlySelectInIcon> 
      <q-zoom background-color="blue-grey-1">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>
      </q-zoom>
    </q-selectable>

    <q-selectable v-model="selectedValues2" val="Image6" style="width: 180px;" onlySelectInIcon>
      <q-zoom background-color="blue-grey-1">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>
      </q-zoom>
    </q-selectable>

    <q-selectable v-model="selectedValues2" val="Image7" style="width: 180px;" onlySelectInIcon>
      <q-zoom background-color="blue-grey-1">
        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>
      </q-zoom>
    </q-selectable>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      selectedValues: [],
      selectedValues2: [],
      showUnselectedIcon: false
    }
  }
}
</script>

