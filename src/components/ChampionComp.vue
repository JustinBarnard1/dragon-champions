<template>
  <div class="champion col-6">
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
  methods: {},
  components: {},
};
</script>


<style>
img {

  height: 300px;
}
</style>