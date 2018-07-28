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
            <a class="navbar-item" slot="trigger">
              <router-link :to="{ name: 'kanvan', params: {} }">
                <a class="button is-inverted">
                  <span class="icon">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                  <span>Enter</span>
                </a>
              </router-link>
            </a>
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
