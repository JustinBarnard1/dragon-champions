<template>
  <div class="dragon">
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
  methods: {},
  components: {},
};
</script>


<style scoped>
img {
  max-height: 300px;
}
</style>