<template lang="html">
  <div class="column is-one-quarter is-primary">
    <article class="message is-dark">
      <div class="message-header">
        <p>Backlog</p>
      </div>
      <div class="message-body">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">
            <ContentTile  v-for="(backlogTile, index) in backlogTiles"  v-bind:key="index" :tile="backlogTile"></ContentTile>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContentTile from '@/components/ContentTile.vue'

export default {
  components: {
    ContentTile,
  },
  computed: {
    ...mapState([
      'backlogTiles',
    ]),
  }
}
</script>

<style lang="css">
</style>
