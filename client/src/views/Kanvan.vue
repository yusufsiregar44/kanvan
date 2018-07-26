<template>
  <div class="kanvan">
    <nav class="navbar is-primary">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title" style="color: white">Kan⊻an</h1>
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
                    <a class="button is-inverted">
                      <span class="icon">
                        <i class="fas fa-sign-out-alt"></i>
                      </span>
                      <span>Logout</span>
                    </a>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <section class="section">
      <div class="container has-text-centered">
        <p class="title">{{ count }}</p>
        <a class="button is-primary" @click="add">+</a>
      </div>
    </section>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'kanvan',
  components: {
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapActions({
      add: 'increment'
    })
  }
}
</script>
