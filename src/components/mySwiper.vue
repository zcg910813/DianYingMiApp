<template>
    <div class="swiper-container"  :class="swiperOpt.container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in listImg" :key="index" :style="{ backgroundImage: 'url(' + item.url + ')' } "></div>
        </div>
        <div v-if="swiperOpt.pagination" class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
  name: "mySwiper",
  props: ["swiperOpt", "listImg"],
  mounted() {
    new Swiper("." + this.swiperOpt.container, this.swiperOpt);
  }
};
</script>

<style>
 .swiper-slide {
  height:3.733333rem;
  background:center center  no-repeat;
  background-size: 100% 100%;
}
</style>
