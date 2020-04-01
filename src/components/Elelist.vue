<template>
  <div class="elelist">
    <ul>
        <li @click='tab(index)' v-for="(item,index) in ele" :key="index" :class="{'active':number==index}"><router-link :to="item.path">{{item.content}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Elelist",
  data() {
    return {
      number: 0,
      ele: [
        {
          path: "/information/letters",
          content: "院线快报"
        },
        {
          path: "/information/HollyWood",
          content: "好莱坞资讯"
        },
        {
          path: "/information/GossIp",
          content: "娱乐八卦"
        }
      ]
    };
  },
  methods: {
    tab(val) {
      this.number = val;
    }
  }
};
</script>

<style>
.elelist{
    background-color: white;
    margin-bottom:0 !important;
}
.elelist ul{
    overflow: hidden;
    list-style: none;
}
.elelist ul li{
    float: left;
    width: 3.333333rem;
    border-bottom: .026667rem solid transparent;
    text-align: center;
    line-height: 1.04rem;
    height: 1.04rem;
}
.elelist ul li a{  
    text-decoration: none;
    color: #909090;
    font-size: .373333rem;
}
.elelist ul li.active a{
    color: #101010;
}
.elelist ul li.active{
     border-bottom: .026667rem solid #2a98da;
}
</style>
