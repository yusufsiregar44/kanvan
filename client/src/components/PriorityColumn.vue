<template lang="html">
  <div class="column is-one-quarter is-primary">
    <article class="message is-warning">
      <div class="message-header">
        <p>Priority</p>
      </div>
      <div class="message-body">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">
            <ContentTile v-for="(priorityTile, index) in priorityTiles"  v-bind:key="index" :tile="priorityTile"></ContentTile>
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
      'priorityTiles',
    ]),
  },
}
</script>

<style lang="css">
</style>
