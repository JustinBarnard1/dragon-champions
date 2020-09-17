<template>
  <div class="dragon col-6" @click="selectDragon">
    <div class="card my-2">
      <img :src="dragonProps.imgUrl" alt />
      <h3>{{dragonProps.name}}</h3>
      <p>{{dragonProps.hp}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "dragon",
  props: ["dragonProps"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectDragon(){
      this.$store.dispatch('selectDragon', this.dragonProps.id)
    }
  },
  components: {},
};
</script>


<style scoped>
img {
  height: 300px;
}
</style>