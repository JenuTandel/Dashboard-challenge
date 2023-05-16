<template>
  <div class="header-height">
    <div class="row gx-0 h-100 align-items-center bg-primary border-bottom">
      <!-- start: profile -->
      <div class="col-4 d-flex px-3">
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
        class="col-4 nav d-flex justify-content-center align-items-center h-100"
      >
        <ul class="d-flex align-items-center">
          <li class="nav-item">
            <router-link to="/list" class="nav-link"
              ><span class="icon icon-list"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/bar" class="nav-link"
              ><span class="icon icon-segment icon-bar"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/segment" class="nav-link"
              ><span class="icon icon-segment"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/table" class="nav-link"
              ><span class="icon icon-table"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/graph" class="nav-link"
              ><span class="icon icon-activity"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/calendar" class="nav-link"
              ><span class="icon icon-calendar"></span
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/file" class="nav-link"
              ><span class="icon icon-file"></span
            ></router-link>
          </li>
        </ul>
      </div>
      <!-- end: icons list -->
      <div class="col-4"></div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
