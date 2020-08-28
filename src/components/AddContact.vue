<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="name" />
    <input type="number" v-model="number" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      number: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.name.trim() && this.number.trim()) {
        const newContact = {
          id: Date.now(),
          name: this.name,
          number: this.number,
          fields: []
        };

        this.$emit("add-contact", newContact);
        this.name = "";
        this.number = "";
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
