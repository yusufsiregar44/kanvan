<template lang="html">
  <div class="tile is-child box">
    <a class="button is-small" style="margin-left: 150px" @click="remove"><i class="fas fa-trash" style="color:red"></i></a>
    <p class="title">{{ tile.content }}</p>
    <a class="button is-pulled-left" style="margin-left: 40px" @click="moveLeft"><i class="fas fa-arrow-left"></i></a>
    <a class="button" style="margin-right: 40px" @click="moveRight"><i class="fas fa-arrow-right"></i></a>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'ContentTile',
  data() {
    return {
    //   kanvanConstant: this.tile.kanvanConstant,
    //   tile.id: this.tile.id,
    //   content: this.tile.content,
      newKanvanConstant: null,
    };
  },
  props: ['tile'],
  methods: {
    ...mapActions([
      'removeTile',
      'moveTileRight',
      'moveTileLeft'
    ]),
    remove() {
      console.log('masuk');
      this.removeTile(this.tile.id)
    },
    moveRight() {
      if (this.tile.kanvanConstant === 4) {
        this.newKanvanConstant = this.tile.kanvanConstant;
      } else {
        this.newKanvanConstant = this.tile.kanvanConstant + 1;
      }
      this.moveTileRight({id: this.tile.id, content: this.tile.content, newKanvanConstant: this.newKanvanConstant})
    },
    moveLeft() {
      if (this.tile.kanvanConstant === 1) {
        this.newKanvanConstant = this.tile.kanvanConstant;
      } else {
        this.newKanvanConstant = this.tile.kanvanConstant - 1;
      }
      this.moveTileLeft({id: this.tile.id, content: this.tile.content, newKanvanConstant: this.newKanvanConstant})
    }
  }
}
</script>

<style lang="css">
</style>
