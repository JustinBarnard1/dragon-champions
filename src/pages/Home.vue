<template>
  <div class="home row">
    <div class="col-12 justify-content-center">
      <button type="button" class="btn btn-danger my-3">Fight</button>
    </div>
    <div class="col-6">
      <dragonComp v-for="dragon in allDragons" :key="dragon.id" :dragonProps="dragon" />
    </div>
    <div class="col-6">
      <champion />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DragonComp from "../components/DragonComp";
import Champion from "../components/ChampionComp";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getAllDragons");
  },
  components: {
    DragonComp,
    Champion,
  },
  computed: {
    allDragons() {
      return this.$store.state.dragons;
    },
  },
};
</script>
<style scoped>
</style>
