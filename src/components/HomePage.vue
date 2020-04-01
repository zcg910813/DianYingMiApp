<template>
     <div class="home-box">
      <mess-age :mass-age="list"></mess-age>
      <movie-chel v-for="(item,index) in moviechels" :movie-chel="item" :key="index"></movie-chel>
      <mess-age :mass-age="list2"></mess-age>
     </div>
</template>

<script>
import MessAge from "./MessAge";
import MovieChel from "./MovieChel";
import { mapState, mapGEtters } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {
      list: {
        json:"massage",
        header:"精选资讯",
        more:"更多资讯>>"
      },
      moviechels: [
        {
          name: "moviechel",
          header: "独家推荐",
          more: "更多电影>>",
          number: 6
        }
      ],
      list2: {
        json:"massage2",
        header:"精选资讯",
        more:"更多资讯>>"
      }
    };
  },
  computed:{
    ...mapState(["count"])
  },

  components: { MessAge, MovieChel },
  mounted() {
    // console.log(this.$store.state.count);
    // console.log(this.$store.getters.dosome)
    // console.log(this.count);
    //vuex : mutations:
    this.$store.commit('m1');
  }
};
</script>

<style>
.home-box > div {
  margin-bottom: 0.133333rem;
}
</style>
