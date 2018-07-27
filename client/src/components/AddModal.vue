<template>
<form action="">
  <div class="modal-card" style="width: 500px">
    <header class="modal-card-head">
      <p class="modal-card-title">Something New</p>
    </header>
    <section class="modal-card-body">
      <ContentField v-model="content"></ContentField>
    </section>
    <footer class="modal-card-foot">
      <div class="container">
        <button class="button is-primary">Add</button>
      </div>
    </footer>
  </div>
</form>
</template>

<script>
import ContentField from '../components/ContentField.vue'
export default {
  components: {
    ContentField,
  },
  watch: {
    content() {
      console.log(this.content);
    },
  },
  methods: {
    validate() {

    }
  }
}
</script>
