<template>
<div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-selectable v-model="selected" val="Image2" style="width: 180px;"> 
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />
      <template v-slot:selected>
        <div class="q-pa-md">
          <div class="text-h4 q-mb-md">Selected</div>
          <div class="q-my-md">Lorem ipsum dolor sit, amet consecteturus.</div>
        </div>
      </template>
    </q-selectable>

    <q-selectable v-model="selected" val="Image3" hideContentOnSelected  style="width: 180px;">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>
      <template v-slot:selected>
        <div class="q-pa-md">
          <div class="text-h4 q-mb-md">Selected</div>
          <div class="q-my-md">Lorem ipsum dolor sit, amet consecteturus.</div>
        </div>
      </template>
    </q-selectable>

    <q-selectable v-model="selected" val="Image4" style="width: 180px;" iconPosition="top right" class="slotIcon"  bgSelectedColor="bg-white">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"  />
      
      <template v-slot:icon="slotProps">
         <div v-if="slotProps.selected" class="q-pa-sm bg-green text-white">Selected</div>
         <div v-else></div>
      </template>
    </q-selectable>
    
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      selected: ""
    }
  }
}
</script>

<style scoped lang="scss">
.slotIcon.selected{
  outline: 4px $green solid;
  padding: 2px;
}
</style>


