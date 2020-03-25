<template>
  <hero>
    <section id="Description">
      <q-markdown>
# QSelectable
QSelectable is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to select one or more items. The items can be images or any other content.
# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):
```
quasar ext add qselectable
```
# Uninstall
To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):
```
quasar ext remove qselectable
```
# Source code
Can be found [here](https://github.com/zoao/app-extension-qselectable).
# Working with QSelectable
Working with QSelectable can be very simple. Almost all essential properties have defaults. Here is an example of using QSelectable:
```js
&lt;q-selectable val="image1" v-model="selectedItems"/&gt;
  &lt;q-img :src="url" style="width: 180px;" /&gt;
&lt;/q-selectable&gt;
```
:::warning
This is a beta release
:::

      </q-markdown>
      </section>

      <example-card
        title="Basic"
        name="Basic"
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Basic.vue').default)"
      />

      <example-card
        title="Cards"
        name="Cards"
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Cards.vue').default)"
      />

      <example-card
        title="Styles"
        name="Styles"
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Styles.vue').default)"
      />

      <example-card
        title="Behaviors"
        name="Behaviors"
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Behaviors.vue').default)"
      />

      <example-card
        title="Slots"
        name="Slots"
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Slots.vue').default)"
      />

      <example-card
        title="Gallery"
        name="Gallery"
        :tag-parts="getTagParts(require('!!raw-loader!../examples/Gallery.vue').default)"
      />
    </div>
    <component-api title="QSelectable API" :json="apiJson" />
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleCard from '../components/ExampleCard'
import { slugify } from 'assets/page-utils'
import getTagParts from '@quasar/quasar-ui-qmarkdown/src/util/getTagParts'
 import apiJson from "@quasar/quasar-app-extension-qSelectable/src/component/QSelectable.json";

const version = require('@quasar/quasar-app-extension-qselectable/package.json').version

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleCard
  },

  data () {
    return {
      tempToc: [],
      apiJson: apiJson
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []

    this.addToToc('Description')
    this.addToToc('Basic')
    this.addToToc('Cards')
    this.addToToc('Styles')
    this.addToToc('Behaviors')
    this.addToToc('Slots')
    this.addToToc('Gallery')
    this.addToToc('QSelectable API')

    this.toc = this.tempToc
  },

  computed: {
    toc: {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    getTagParts,
    addToToc (name, level = 1) {
      const slug = slugify(name)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>

<style lang="stylus">
.example-page {
  padding: 16px 46px;
  font-weight: 300;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
