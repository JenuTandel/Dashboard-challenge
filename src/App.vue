<template>
  <section class="h-100 w-100 d-flex">
    <aside>
      <the-sidebar></the-sidebar>
    </aside>
    <div class="d-flex flex-column flex-grow-1 background-primary">
      <header>
        <the-header @theme-color="themeColor"></the-header>
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
import { onMounted, ref, provide } from "vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
  setup() {
    const gridLineColor = ref();
    const borderColor = ref();
    const ticksColor = ref();

    // provide("color", { gridLineColor, borderColor, ticksColor }),

    if (localStorage.getItem("theme") == "light") {
      document.documentElement.className = `light`;
      gridLineColor.value = "#000000";
      borderColor.value = "#ffffff";
      ticksColor.value = "#000000";
    } else {
      // localStorage.setItem("theme", "dark");
      document.documentElement.className = "dark";
      gridLineColor.value = "#323543";
      ticksColor.value = "#ffffff";
      borderColor.value = "#101321";
    }

    function themeColor(color: any) {
      if (color == "dark") {
        document.documentElement.className = "dark";
        localStorage.setItem("theme", "dark");
        gridLineColor.value = "#323543";
        ticksColor.value = "#ffffff";
        borderColor.value = "#101321";
      }
      if (color == "light") {
        document.documentElement.className = "light";
        localStorage.setItem("theme", "light");
        gridLineColor.value = "#1f1f1f";
        borderColor.value = "#ffffff";
        ticksColor.value = "#000000";
      }
      if (color == "orange") {
        document.documentElement.className = "orange";
      }
      if (color == "blue") {
        document.documentElement.className = "blue";
      }
    }
    provide("gridLineColor", gridLineColor);
    provide("borderColor", borderColor);
    provide("ticksColor", ticksColor);
    return { themeColor };
  },
};
</script>
<style lang="scss">
#app {
  height: 100%;
  width: 100%;
}
</style>
