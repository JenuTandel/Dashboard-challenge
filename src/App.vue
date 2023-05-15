<template>
  <section class="h-100 w-100 d-flex">
    <aside>
      <the-sidebar></the-sidebar>
    </aside>
    <div class="d-flex flex-column flex-grow-1">
      <nav>
        <the-header></the-header>
      </nav>
      <main class="h-100">
        <router-view></router-view>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import TheHeader from "./components/core/TheHeader.vue";
import TheSidebar from "./components/core/TheSidebar.vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
