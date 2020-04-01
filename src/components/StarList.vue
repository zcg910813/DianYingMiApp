<template>
  <div id="starpage">
      <div class="title">
        <div class="center">
          <h3>{{starImg.header}}</h3>
          <span href="#" @click='tab'>{{starImg.more}}</span>
        </div>
      </div>
      <div class="content">
        <div class="center">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <img :src="item.imges_url">
              <p>{{item.starname}}</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "StarPage",
  props: ["starImg"],
  data() {
    return {
      list: "",
      set: new Set(),
      ajaxData: ""
    };
  },
  methods: {
    random(data) {
      let n = Math.floor(Math.random() * data.length);
      this.set.add(data[n]);
      if (this.set.size < this.starImg.number) {
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
        this.ajaxData = response.data[this.starImg.name];
        this.random(this.ajaxData);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#starpage {
  background-color: #ffffff;
}
#starpage .center {
  width: 9.466667rem;
  margin: 0 auto;
}
#starpage .title {
  height: 1.066667rem;
  overflow: hidden;
  text-align: center;
  line-height: 1.066667rem;
  border-bottom: 0.013333rem solid #d8d8d8;
}
#starpage .title h3 {
  float: left;
  color: #303030;
  font-size: 0.373333rem;
  font-weight: normal;
}
#starpage .title span {
  color: #8b8b8b;
  font-size: 0.266667rem;
  float: right;
  display: block;
  padding-left: 0.4rem;
  background: url("../../static/img/change.png") no-repeat 0 center;
}
#starpage .content ul {
  overflow: hidden;
  margin-right: -0.066667rem;
  margin-top: 0.266667rem;
}
#starpage .content ul li {
  list-style: none;
  width: 1.52rem;
  float: left;
  margin-right: 0.066667rem;
}
#starpage .content ul li img {
  width: 100%;
}
#starpage .content ul li p {
  text-align: center;
  font-size: 0.293333rem;
  color: #212121;
  line-height: 0.613333rem;
}
</style>
