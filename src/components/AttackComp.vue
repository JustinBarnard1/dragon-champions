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
      let id = this.$route.params.id;
      console.log(id);
      let payload = { 
        attack: this.attackProp.name,
        id: id
      }
      this.$store.dispatch('attack', payload);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>