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
            <router-link :to="{ name: 'home', params: {} }">
              <a class="button is-inverted">
                <span class="icon">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                <span style="color:black">Exit</span>
              </a>
            </router-link>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <section class="section">
    <div class="container has-text-centered" style="margin-bottom: 50px">
      <button class="button is-primary" @click="isComponentModalActive = true">
        Add Something New
      </button>

      <b-modal :active.sync="isComponentModalActive" has-modal-card>
        <AddModal @addComplete="isComponentModalActive = false"></AddModal>
      </b-modal>
    </div>
    <div class="columns">
      <BacklogColumn></BacklogColumn>
      <PriorityColumn></PriorityColumn>
      <InProgressColumn></InProgressColumn>
      <DoneColumn></DoneColumn>
    </div>
  </section>
</div>
</template>

<script>
import BacklogColumn from '../components/BacklogColumn.vue'
import PriorityColumn from '../components/PriorityColumn.vue'
import InProgressColumn from '../components/InProgressColumn.vue'
import DoneColumn from '../components/DoneColumn.vue'
import AddModal from '../components/AddModal.vue'

export default {
  name: 'kanvan',
  data() {
    return {
      isComponentModalActive: false,
      formProps: {

      }
    };
  },
  components: {
    BacklogColumn,
    PriorityColumn,
    InProgressColumn,
    DoneColumn,
    AddModal,
  },
  methods: {

  }
}
</script>
