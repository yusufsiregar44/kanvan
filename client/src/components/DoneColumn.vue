<template lang="html">
  <div class="column is-one-quarter is-primary">
    <article class="message is-success">
      <div class="message-header">
        <p>Done</p>
      </div>
      <div class="message-body">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">
            <ContentTile v-for="(doneTile, index) in doneTiles" v-bind:key="index" :tile="doneTile"></ContentTile>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import ContentTile from '@/components/ContentTile.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ContentTile,
  },
  computed: {
    ...mapState([
      'doneTiles'
    ]),
  },
}
</script>

<style lang="css">
</style>
