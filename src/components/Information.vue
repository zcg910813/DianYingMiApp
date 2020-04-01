<template>
     <div class="home-box">
      <ele-list></ele-list>
      <router-view></router-view>
      <movie-chel v-for="(item,index) in moviechels" :movie-chel="item" :key="index"></movie-chel>
      <mess-age :mass-age="list2"></mess-age>
     </div>
</template>

<script>
import MessAge from "./MessAge";
import MovieChel from "./MovieChel";
import EleList from "./Elelist";
export default {
  name: "HomePage",
  data() {
    return {
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

  components: { MessAge, MovieChel,EleList}
};
</script>

<style>
.home-box > div {
  margin-bottom: 0.133333rem;
}
</style>
