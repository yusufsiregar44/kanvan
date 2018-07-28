<template lang="html">
  <div class="column is-one-quarter is-primary">
    <article class="message is-info">
      <div class="message-header">
        <p>In Progress</p>
      </div>
      <div class="message-body">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">
            <ContentTile v-for="(inProgressTile, index) in inProgressTiles" v-bind:key="index" :tile="inProgressTile"></ContentTile>
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
      'inProgressTiles'
    ]),
  },
}
</script>

<style lang="css">
</style>
