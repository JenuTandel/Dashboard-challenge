<template>
  <div id="sidebar" class="bg-black h-100 d-flex flex-column">
    <div class="d-flex flex-column align-items-center flex-grow-1">
      <div class="header-height mx-3 d-flex align-items-center">
        <div
          class="logo-wrapper d-flex align-items-center justify-content-center"
        >
          <span class="text-secondary">PM</span>
        </div>
      </div>
      <div
        class="d-flex flex-column w-100 border-top border-bottom align-items-center"
      >
        <span class="m-3 icon icon-home"></span>
        <span class="m-3 icon icon-schedule"></span>
      </div>
      <span class="m-3 icon icon-users"></span>
      <span class="m-3 icon icon-work"></span>
      <div class="nav d-sm-block d-md-none border-top">
        <ul>
          <navbar-data></navbar-data>
        </ul>
      </div>
    </div>
    <div class="d-flex flex-column align-items-center">
      <span class="icon m-3 icon-plus"></span>
      <span class="icon m-3 icon-help-circle"></span>
      <figure class="img-wrapper m-3">
        <img src="../../assets/images/avatar.jpg" alt="avatar" />
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import NavbarData from "../NavbarData.vue";
export default {
  components: { NavbarData },
};
</script>
<style scoped lang="scss">
@media (max-width: 768px) {
  .nav {
    display: block;
  }
}
</style>
