<template>
     <div class="letters">
      <mess-age1 :mass-age="Holly"></mess-age1>
     </div>
</template>

<script>
import MessAge1 from "./MessAge1";
export default {
  name: "HollyWood",
  data() {
    return {
      Holly:{
        json:"massage3"
      }
    };
  },
  components: { MessAge1},
};
</script>

<style>

</style>
