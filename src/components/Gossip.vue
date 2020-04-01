<template>
     <div class="letters">
      <mess-age1 :mass-age="GossIp"></mess-age1>
     </div>
</template>

<script>
import MessAge1 from "./MessAge1";
export default {
  name: "GossIp",
  data() {
    return {
      GossIp:{
        json:"massage4"
      }
    };
  },
  components: { MessAge1},
};
</script>

<style>

</style>
