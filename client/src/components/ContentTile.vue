<template lang="html">
  <div class="tile is-child box">
    <a class="button is-small" style="margin-left: 150px"><i class="fas fa-trash" style="color:red" @click="remove"></i></a>
    <p class="title">{{ tile.content }}</p>
    <a class="button is-pulled-left" style="margin-left: 40px"><i class="fas fa-arrow-left"></i></a>
    <a class="button" style="margin-right: 40px"><i class="fas fa-arrow-right"></i></a>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'ContentTile',
  data() {
    return {
      kanvanConstant: this.tile.kanvanConstant,
      tileId: this.tile.id,
    };
  },
  props: ['tile'],
  methods: {
    ...mapActions([
      'removeTile'
    ]),
    remove() {
      this.removeTile(this.tileId)
      .then(() => {
        window.alert('Successfully deleted tile!')
      })
    },
  }
}
</script>

<style lang="css">
</style>
