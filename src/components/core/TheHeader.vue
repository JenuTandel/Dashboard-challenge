<template>
  <div class="header-height">
    <div
      class="row gx-0 h-100 align-items-center background-primary border-bottom"
    >
      <!-- start: profile -->
      <div class="profile col-xl-4 col-md-5 col-11 d-flex px-3">
        <h4 class="secondary-color fw-light">Govalle Construction</h4>
        <figure class="img-wrapper ms-4">
          <img src="../../assets/images/avatar.jpg" alt="avatar" />
        </figure>
        <div
          class="name-logo-wrapper d-flex align-items-center justify-content-center border border-primary"
        >
          <span class="name text-white">GP</span>
        </div>
      </div>
      <!-- end: profile -->
      <!-- start: icons list -->
      <div
        class="col-xl-4 col-md-6 nav d-none d-md-flex justify-content-center align-items-center h-100"
      >
        <ul class="d-flex align-items-center">
          <navbar-data></navbar-data>
        </ul>
      </div>
      <!-- end: icons list -->
      <div class="col-xl-4 col-md-1 col-1 d-block d-xl-flex align-items-center">
        <!-- <div class="theme-options"> -->
        <!-- <div id="theme-light" @click="$emit('theme-color', 'light')">
            <span class="icon-moon"></span>
          </div>
          <div id="theme-dark" @click="$emit('theme-color', 'dark')">
            <span class="icon-light"></span>
          </div> -->
        <!-- </div> -->
        <span
          class="icon icon-light text-warning"
          :class="!on ? 'd-none' : 'd-block'"
          @click="onLight"
        ></span>
        <span
          class="icon icon-moon fs-2"
          :class="on ? 'd-none' : 'd-block'"
          @click="onDark"
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavbarData from "../NavbarData.vue";
import { ref } from "vue";
export default {
  components: { NavbarData },
  setup(_: any, context: any) {
    const theme = ref(true);
    const on = ref(true);
    function onDark() {
      on.value = true;
      context.emit("theme-color", "dark");
    }
    function onLight() {
      on.value = false;
      context.emit("theme-color", "light");
    }
    return { theme, on, onDark, onLight };
  },
};
</script>

<style scoped lang="scss">
label {
  background-color: yellow;
  height: 50px;
  width: 50px;
}
</style>
