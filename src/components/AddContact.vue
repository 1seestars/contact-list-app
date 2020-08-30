<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="Name" v-model="name" />
    <input type="number" placeholder="Number" v-model="number" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "",
      number: "",
    };
  },
  methods: {
    ...mapMutations(["createContact"]),
    submit() {
      if (this.name.trim() && this.number.trim()) {
        this.createContact({
          id: Date.now(),
          name: this.name,
          number: this.number,
          fields: [],
        });
        this.name = this.number = "";
      }
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
