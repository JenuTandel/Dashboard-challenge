<template>
  <div class="header-height">
    <div class="row gx-0 h-100 align-items-center bg-primary border-bottom">
      <!-- start: profile -->
      <div class="profile col-xl-4 col-md-6 col-12 d-flex px-3">
        <h4 class="text-secondary fw-light">Govalle Construction</h4>
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
      <div class="col-xl-4 d-none d-xl-block">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import NavbarData from "../NavbarData.vue";
export default {
  components: { NavbarData },
};
</script>

<style scoped lang="scss"></style>
