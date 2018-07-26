<template>
  <section class="section">
    <nav class="navbar is-primary">
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
  </section>
</template>

<script>

export default {
  name: 'kanvan',
  components: {

  },
  data() {
    return {

    };
  }
}
</script>
