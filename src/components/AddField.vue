<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <input type="text" v-model="value" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      value: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim() && this.value.trim()) {
        const newField = {
          id: Date.now(),
          title: this.title,
          value: this.value,
        };

        this.$emit("add-field", newField);
        this.title = "";
        this.value = "";
      }
    },
  },
};
</script>
