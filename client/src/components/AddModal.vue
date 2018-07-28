<template>
<form action="">
  <div class="modal-card" style="width: 500px">
    <header class="modal-card-head">
      <p class="modal-card-title">Something New</p>
    </header>
    <section class="modal-card-body">
      <template lang="html">
        <b-field label="Content">
            <b-input
                type="text"
                placeholder="Content"
                required
                v-model="newTileContent"
                >
            </b-input>
        </b-field>
      </template>
    </section>
    <footer class="modal-card-foot">
      <div class="container">
        <button class="button is-primary" @click="add()">Add</button>
      </div>
    </footer>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      newTileContent: '',
    };
  },
  watch: {
    // content() {
    //   console.log(this.content);
    // },
  },
  methods: {
    ...mapActions([
      'addNewTile'
    ]),
    add() {
      let str = this.newTileContent;
      let booleanValid = /[A-z]/g.test(str);
      if (!booleanValid) {
        window.alert("Please enter a valid content!");
      } else {
          this.addNewTile(this.newTileContent)
          .then(() => {
            window.alert('Successfully added tile!')
            this.$emit('addComplete')
          })
      }
    }
  }
}
</script>
