<template>
  <div id="moviechel">
      <div class="title">
        <div class="center">
          <h3>{{movieChel.header}}</h3>
          <span :style="{ backgroundImage: 'url(' + movieChel.url + ')' }"  @click="tab" @touch="tab">{{movieChel.more}}</span>
        </div>
      </div>
      <div class="content">
        <div class="center">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <img :src="item.img_url">
              <p>{{item.headline}}</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Moviechel",
  props: ["movieChel"],
  data() {
    return {
      list: "",
      set : new Set(),
      ajaxData:""
    };
  },
  methods: {
    random(data) {
      let n = Math.floor(Math.random() * data.length);
      this.set.add(data[n]);
      if (this.set.size < this.movieChel.number) {
        this.random(data);
      } else {
        this.list = Array.from(this.set);
        return;
      }
    },
    tab() {
      this.set.clear();
      this.random(this.ajaxData);
    }
  },
  mounted() {
    this.$http
      .get("static/json/massage.json")
      .then(response => {
        this.ajaxData = response.data[this.movieChel.name];
        this.random(this.ajaxData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#moviechel {
  background-color: #ffffff;
}
#moviechel .center {
  width: 9.466667rem;
  margin: 0 auto;
}
#moviechel .title {
  height: 1.066667rem;
  overflow: hidden;
  text-align: center;
  line-height: 1.066667rem;
  border-bottom: 0.013333rem solid #d8d8d8;
}
#moviechel .title h3 {
  float: left;
  color: #303030;
  font-size: 0.373333rem;
  font-weight: normal;
}
#moviechel .title span {
  color: #8b8b8b;
  font-size: 0.266667rem;
  float: right;
  display: block;
  padding-left: 0.4rem;
  background:  no-repeat 0 center;
}
#moviechel .content ul {
  overflow: hidden;
  margin-right: -0.133333rem;
  margin-top: 0.266667rem;
}
#moviechel .content ul li {
  list-style: none;
  width: 3.053333rem;
  float: left;
  margin-right: 0.133333rem;
}
#moviechel .content ul li img {
  width: 3.053333rem;
  height: 4.333333rem;
}
#moviechel .content ul li p {
  text-align: center;
  font-size: 0.293333rem;
  color: #212121;
  line-height: 0.666667rem;
}
</style>
