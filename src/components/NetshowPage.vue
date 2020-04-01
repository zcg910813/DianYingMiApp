<template>
  <div class="netshow-box">
      <movie-chel v-for="(item,index) in moviechels" :movie-chel='item' :key="index"></movie-chel>
      <star-page :star-img='starimg'></star-page>
  </div>
</template>

<script>
import MovieChel from "./MovieChel"
import StarPage from "./StarList"
export default {
  name: "netshowpage",
  data() {
    return {
      moviechels: [
        {
          name: "moviechel",
          header: "最新电影",
          more: "换一批",
          url:"../../static/img/change.png",
          number:6
        },{
          name: "moviechel",
          header: "最新电影预告",
          more: "换一批",
          url:"../../static/img/change.png",
          number:6
        },{
          name: "moviechel",
          header: "2016电影预告",
          more: "换一批",
          url:"../../static/img/change.png",
          number:6
        }
      ],
      starimg:{
          name: "starconponent",
          header: "明星",
          more: "换一批",
          number:6
        }
    };
  },
  components:{MovieChel,StarPage}
};
</script>

<style>
 .netshow-box>div{
    margin-bottom: .133333rem; 
 }
</style>
