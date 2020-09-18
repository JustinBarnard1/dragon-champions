<template>
  <div class="champion col-6" @click="selectChampion">
    <div class="card my-2">
      <img :src="championProps.imgUrl" alt />
      <h3>{{championProps.name}}</h3>
      <p>{{championProps.hp}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "champion",
  props: ["championProps"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectChampion() {
      this.$store.dispatch("selectChampion", this.championProps);
    },
  },
  components: {},
};
</script>


<style>
img {
  height: 300px;
}
</style>