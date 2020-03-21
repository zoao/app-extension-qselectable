<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selected" val="Image2" selectedIconColor="red" unselectedIconColor="green"> 
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image3" selectedIcon="https" selectedIconColor="green" unselectedIcon>
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image4" iconPosition="bottom right" iconSize="xl">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image5" paddingSelected style="width: 180px;">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image6" paddingSelected bgSelectedColor="bg-black" style="width: 180px;">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />
    </q-selectable>

    <q-selectable v-model="selected" val="Image7" class="image7" style="width: 180px;">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />
    </q-selectable>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: []
    }
  }
}
</script>

<style scoped lang="scss">
.image7.selected{
  outline: 4px $primary solid;
}
</style>