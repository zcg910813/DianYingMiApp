<template>
      <el-input id="search" placeholder="影片 / 影人 / 资讯，任你搜" v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
</template>

<script>
export default {
  data() {
    return {
      input23: ""
    };
  }
};
</script>

<style>
.el-input {
  margin: 0.133333rem auto;
  width: 9.466667rem;
  line-height:  0.986667rem;
  display: block;
}
#search {
  height: 0.986667rem;
  line-height:  0.986667rem;
  font-size: .346667rem;
  text-align: center;
  border: none;
}

</style>
