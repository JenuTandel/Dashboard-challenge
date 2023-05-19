<template>
  <section class="h-100 w-100 d-flex">
    <aside>
      <the-sidebar></the-sidebar>
    </aside>
    <div class="d-flex flex-column flex-grow-1">
      <header>
        <the-header></the-header>
      </header>
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
  height: 100%;
  width: 100%;
}
</style>
