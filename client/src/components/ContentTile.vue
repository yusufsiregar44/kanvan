<template lang="html">
  <div class="tile is-child box">
    <p class="title">{{ tile.content }}</p>
    <a class="button is-pulled-left" style="margin-left: 40px"><i class="fas fa-arrow-left"></i></a>
    <a class="button" style="margin-right: 40px"><i class="fas fa-arrow-right"></i></a>
  </div>
</template>
<script>
export default {
  name: 'ContentTile',
  data() {
    return {
      kanvanConstant: this.tile.kanvanConstant,
    };
  },
  props: ['tile']
}
</script>

<style lang="css">
</style>
