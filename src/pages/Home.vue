<template>
  <div>
    <div class="home row">
      <div class="col-12 justify-content-center">
        <button class="btn btn-danger my-3" @click="startGame">Fight</button>
      </div>
      <div class="col-6">
        <div class="row">
          <dragonComp v-for="dragon in allDragons" :key="dragon.id" :dragonProps="dragon" />
        </div>
      </div>
      <div class="col-6">
        <div class="row">
          <champion v-for="champion in champions" :key="champion.id" :championProps="champion" />
        </div>
      </div>
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
    this.$store.dispatch("getAllChampions");
  },
  components: {
    DragonComp,
    Champion,
  },
  computed: {
    allDragons() {
      return this.$store.state.dragons;
    },
    champions() {
      return this.$store.state.champions;
    },
    getGame() {
      return this.$store.state.game;
    },
  },
  methods: {
    startGame() {
      this.$store.dispatch("startGame", {
        dragon: this.getGame.dragon,
        champion: this.getGame.champion,
      });
    },
  },
};
</script>
<style scoped>
</style>
