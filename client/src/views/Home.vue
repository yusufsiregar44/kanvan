<template>
<section class="hero is-primary is-medium" style="height: 520px">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title">Kan⊻an</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
          <span></span>
          <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <b-dropdown position="is-bottom-left">
              <a class="navbar-item" slot="trigger">
                      <a class="button is-inverted">
                        <span class="icon">
                          <i class="fas fa-sign-in-alt"></i>
                        </span>
                        <span>Login</span>
                      </a>
              </a>

              <b-dropdown-item custom paddingless>
                <form action="">
                  <div class="modal-card" style="width:300px;">
                    <section class="modal-card-body">

                      <EmailField></EmailField>

                      <PasswordField></PasswordField>

                    </section>
                    <footer class="modal-card-foot">
                      <router-link :to="{ name: 'kanvan', params: {} }">
                          <button class="button is-primary">Login</button>
                      </router-link>
                    </footer>
                  </div>
                </form>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Kan⊻an
      </p>
      <p class="subtitle">
        Kanban + Vue × Tampan
      </p>
      <div class="container">
        <section>
          <button class="button is-primary is-inverted is-outlined" @click="isComponentModalActive = true">
            Register
          </button>

          <b-modal :active.sync="isComponentModalActive" has-modal-card>
            <RegisterModal v-bind="formProps"></RegisterModal>
          </b-modal>
        </section>
      </div>
    </div>
  </div>

</section>
</template>

<script>
import EmailField from '@/components/EmailField.vue'
import PasswordField from '@/components/PasswordField.vue'
import RegisterModal from '@/components/RegisterModal.vue'

export default {
  name: 'home',
  components: {
    EmailField,
    PasswordField,
    RegisterModal,
  },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {

      }
    };
  }
}
</script>
