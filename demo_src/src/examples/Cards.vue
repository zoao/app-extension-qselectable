<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selected" val="Image2" selectedIcon unselectedIcon> 
      <q-card class="my-card" :class="{'bg-primary':selected=='Image2', 'text-white':selected=='Image2'}">
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
      <q-card class="my-card" :class="{'bg-red':selected=='Image3', 'text-white':selected=='Image3'}">
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

    <q-selectable v-model="selected" val="Image4"  selectedIcon unselectedIcon>
      <q-card class="my-card" :class="{'bg-green':selected=='Image4', 'text-white':selected=='Image4'}">
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
}
</style>
