<template>
  <div class="game">
    <div class="row">
      <div class="col-6">
        <img :src="dragon.imgUrl" alt />
        <h2>{{dragon.name}}</h2>
        <h3>{{dragon.hp}}</h3>
      </div>
      <div class="col-6">
        <img :src="champion.imgUrl" alt />
        <h2>{{champion.name}}</h2>
        <h3>{{champion.hp}}</h3>
        <p>{{champion.race}}-{{champion.class}}</p>
      </div>
      <div class="col d-flex flex-direction-row justify-content-center">
        <attack v-for="attack in attacks" :key="attack.id" :attackProp="attack" />
      </div>
    </div>
  </div>
</template>


<script>
import Attack from "../components/AttackComp.vue";
export default {
  name: "game",
  data() {
    return {};
  },
  computed: {
    attacks() {
      return this.$store.state.activeChampion.attacks;
    },
    champion() {
      return this.$store.state.activeChampion;
    },
    dragon() {
      return this.$store.state.activeDragon;
    },
  },
  methods: {},
  components: {
    Attack,
  },
};
</script>


<style scoped>
</style>