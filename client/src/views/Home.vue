<template>
  <section class="hero is-primary is-large">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h1 class="title">Kanvan</h1>
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
                                    <b-field label="Email">
                                        <b-input
                                            type="email"
                                            placeholder="Your email"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Password">
                                        <b-input
                                            type="password"
                                            password-reveal
                                            placeholder="Your password"
                                            required>
                                        </b-input>
                                    </b-field>

                                </section>
                                <footer class="modal-card-foot">
                                    <button class="button is-primary">Login</button>
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
          Kanvan
        </p>
        <p class="subtitle">
          Kanban + Vue
        </p>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  name: 'home',
}
</script>
