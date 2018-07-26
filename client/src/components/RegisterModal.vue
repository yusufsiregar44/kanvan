<template>
<form action="">
  <div class="modal-card" style="width: 500px">
    <header class="modal-card-head">
      <p class="modal-card-title">Register</p>
    </header>
    <section class="modal-card-body">

      <NameField></NameField>

      <EmailField></EmailField>

      <PasswordField></PasswordField>

    </section>
    <footer class="modal-card-foot">
      <div class="container">
        <button class="button is-primary">Register</button>
      </div>
    </footer>
  </div>
</form>
</template>

<script>
import EmailField from '@/components/EmailField.vue'
import PasswordField from '@/components/PasswordField.vue'
import NameField from '@/components/NameField.vue'

export default {
  components: {
    EmailField,
    PasswordField,
    NameField,
  }
}
</script>
