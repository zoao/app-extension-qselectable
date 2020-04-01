<template>
  <div class="sample q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selected" val="Image1" selectedIcon unselectedIcon bgSelectedColor="bg-primary"> 
      <q-card class="my-card" :class="{'text-white':selected=='Image1'}">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Set background-color in css to transparent, for q-selectable change the background
      </q-card-section>
    </q-card>
    </q-selectable>

    <q-selectable v-model="selected" val="Image2"  selectedIcon unselectedIcon bgSelectedColor="bg-red">
      <q-card class="my-card" :class="{'text-white':selected=='Image2'}">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      </q-card-section>
    </q-card>
    </q-selectable>

    <q-selectable v-model="selected" val="Image3"  selectedIcon unselectedIcon>
      <q-card class="my-card" :class="{'bg-green':selected=='Image3', 'text-white':selected=='Image3'}">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        Another way to change background color
      </q-card-section>
    </q-card>
    </q-selectable>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null
    }
  }
}
</script>

<style scoped>
.my-card{
  width: 100%;
  max-width: 250px;
  background-color: transparent;
}
</style>
