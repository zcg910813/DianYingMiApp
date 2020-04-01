<template>
     <div class="letters">
      <mess-age1 :mass-age="letter"></mess-age1>
     </div>
</template>

<script>
import MessAge1 from "./MessAge1";
export default {
  name: "letTers",
  data() {
    return {
      letter: {
        json:"massage"
      }
    };
  },
  components: { MessAge1},
};
</script>

<style>

</style>
