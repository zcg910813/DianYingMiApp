<template>
    <div class="swiper-container" :class="swiperOpt.container">
        <div class="swiper-wrapper">

            <div v-for="(item,index) in imgs" :key="index" class="swiper-slide"><img :src="item" alt=""></div>
        </div>
        <div v-if="swiperOpt.pagination" class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
  name: "MySwiper",
  data() {
    return {
      imgs: [require('../assets/slide1.jpg')]
    };
  },
  props: ["swiperOpt"],
  mounted() {
    new Swiper(
      "." + this.swiperOpt.container,
      Object.assign(
        {
          // autoplay:10000
        },
        this.swiperOpt
      )
    );
  }
};
</script>
<style scoped>
.swiper-slide {
  height: 4.533333rem;
  font-size: 0.4rem;
  background: rgb(212, 96, 19);
  color: #ffffff;
  /* background: url('../assets/img/p1.jpg') no-repeat;
  background-size: 100% 100%; */
}
.swiper-slide img {
  width: 100%;
  height:100%;
}
</style>