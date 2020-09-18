<template>
  <div class="attack">
    <button class="btn-lg btn-warning mx-1 mt-5" @click="attack">{{attackProp.name.toUpperCase()}}</button>
  </div>
</template>


<script>
export default {
  name: "attack",
  props: ["attackProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    attack() {
      id = attackProp.id;
      console.log(id);
      // this.$store.dispatch();
    },
  },
  components: {},
};
</script>


<style scoped>
</style>