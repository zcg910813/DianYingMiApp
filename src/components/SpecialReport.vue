<template>
     <div class="home-box">
         <amuse-ment :amuse-ment="special"></amuse-ment>
     </div>
</template>

<script>
import AmuseMent from "./AmuseMent";
export default {
  name: "SpecialReport",
  data() {
    return {
      special: 
        {
          name: "specialreport"
        }
    };
  },
  components: { AmuseMent }
};
</script>

<style>
.home-box > div {
  margin-bottom: 0.133333rem;
}
</style>
