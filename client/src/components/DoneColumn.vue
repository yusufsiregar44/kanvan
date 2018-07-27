<template lang="html">
  <div class="column is-one-quarter is-primary">
    <article class="message is-success">
      <div class="message-header">
        <p>Done</p>
      </div>
      <div class="message-body">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">
            <ContentTile></ContentTile>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import ContentTile from '@/components/ContentTile.vue'
export default {
  components: {
    ContentTile,
  }
}
</script>

<style lang="css">
</style>
