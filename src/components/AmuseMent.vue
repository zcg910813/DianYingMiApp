<template>
  <div class="amusement-box ">
    <div class="center">
      <div v-for="(item,index) in titles" :key="index"  class="amusement">
        <img class="amuse-img" :src="item.imgurl">
        <ul class="amuse-list">
          <li v-for="(item,index) in matter" :key="index">
            <img :src="item.imges_url">
            <span>{{item.synopsis}}</span>
            <b>{{item.user}}</b>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "amusement",
  props: ["amuseMent"],
  data() {
    return {
      titles: [
        {
          imgurl: "../../static/img/z1.png"
        },
        {
          imgurl: "../../static/img/z2.png"
        },
        {
          imgurl: "../../static/img/z3.png"
        },
        {
          imgurl: "../../static/img/z4.png"
        }
      ],
      matter: []
    };
  },
  mounted() {
    this.$http
      .get("static/json/massage.json")
      .then(response => {
        this.matter = response.data[this.amuseMent.name];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
.center {
  width: 9.466667rem;
  margin: 0 auto;
}
.amusement-box {
  background-color: #fff;
  overflow: hidden;
}
.amusement-box .amuse-img {
  display: block;
  margin: 0.133333rem 0;
}
.amusement-box .amuse-list {
  overflow: hidden;
  list-style: none;
  margin-right: -0.093333rem;
}
.amusement-box .amuse-list li {
  float: left;
  width: 3.093333rem;
  background-color: #f3f3f3;
  margin-right: 0.093333rem;
}
.amusement-box .amuse-list li img {
  width: 3.093333rem;
}
.amusement-box .amuse-list li span {
  font-size: 0.266667rem;
  color: #464646;
  line-height: 0.346667rem;
  padding: 0 0.133333rem;
}
.amusement-box .amuse-list li b {
  font-weight: normal;
  font-size: 0.24rem;
  color: #868686;
  display: block;
  line-height: 0.56rem;
  margin-top: 0.24rem;
  padding: 0 0.133333rem;
}
</style>
