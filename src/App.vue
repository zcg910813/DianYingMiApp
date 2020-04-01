<template>
  <div id="app">
     <my-swiper :swiper-opt="opts2" :list-img="listImg"></my-swiper>
    <sea-rch></sea-rch>
    <router-view/>
    <menu-list></menu-list>
  </div>
</template>

<script>
import banner from "./assets/img/banner.jpg";
import MenuList from "./components/MenuList";
import SeaRch from "./components/SeaRch";
import mySwiper from "./components/mySwiper";
export default {
  name: "app",
  data() {
    return {
      listImg: [
        {
          url: banner
        },
        {
          url: banner
        },
        {
          url: banner
        },
        {
          url: banner
        },
        {
          url: banner
        }
      ],
      opts2: {
        container: "swp2",
        autoplay: 2000,
        loop: true,
        speed: 500,
        pagination: ".swiper-pagination",
        paginationClickable: true
      }
    };
  },
  components: { mySwiper, MenuList, SeaRch }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  background-color: #f4f4f4;
}
#app {
  width: 10rem;
  margin: 0 auto;
  position: relative;
  padding-bottom: 1.333333rem;
}
</style>
