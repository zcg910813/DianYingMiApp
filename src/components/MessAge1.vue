<template>
  <div id="message">
      <div class="content">
        <div class="center">
          <ul>
            <li v-for="(item,index) in matter" :key="index">
              <img :src="item.img_url">
              <h2>{{item.headline}}</h2>
              <p>{{item.contianer}}</p>
              <div class="msg-f"> <i></i><span>{{item.name}}</span><b>{{item.time}}</b></div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "message1",
  props:['massAge'],
  data() {
    return {
      matter: []
    };
  },
  mounted() {
    this.$http
      .get("static/json/massage.json")
      .then(response => {
        this.matter = response.data[this.massAge.json];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
#message {
  background-color: #ffffff;
}
#message .center {
  width: 9.466667rem;
  margin: 0 auto;
}
#message .title {
  height: 1.066667rem;
  overflow: hidden;
  text-align: center;
  line-height: 1.066667rem;
  border-bottom: 0.013333rem solid #d8d8d8;
}
#message .title h3 {
  float: left;
  color: #303030;
  font-size: 0.373333rem;
  font-weight: normal;
}
#message .title span {
  color: #8b8b8b;
  font-size: 0.266667rem;
  float: right;
}
#message .content ul li:first-child{
  border-top: none;
}
#message .content ul li{
  list-style: none;
  padding-top: 0.4rem;
  padding-bottom: 0.266667rem;
  position: relative;
  height: 1.96rem;
  padding-left: 3.2rem;
  border-top: 0.013333rem solid #d8d8d8;
}
#message .content ul li img {
  position: absolute;
  left: 0;
  top: 0.4rem;
  width: 2.866667rem;
  height: 1.96rem;
}
#message .content ul li h2 {
  color: #303030;
  font-size: 0.346667rem;
  padding-bottom: 0.133333rem;
}
#message .content ul li p {
  line-height: 0.48rem;
  color: #7b7b7b;
  font-size: 0.293333rem;
}
#message .content ul li .msg-f i {
  display: block;
  width: 0.413333rem;
  height: 100%;
  float: left;
  background: url("../../static/img/tx.jpg") no-repeat left center;
  margin-right: 0.133333rem;
  border-radius: 50%;
}
#message .content ul li .msg-f {
  overflow: hidden;
  height: 0.373333rem;
  line-height: 0.413333rem;
  position: absolute;
  bottom: .266667rem;
  width: 6.2rem;
}
#message .content ul li .msg-f span {
  display: block;
  float: left;
  color: #a1a1a1;
  font-size: 0.24rem;
}
#message .content ul li .msg-f b {
  float: right;
  font-weight: normal;
  color: #a1a1a1;
  font-size: 0.24rem;
}
</style>
