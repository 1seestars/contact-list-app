<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="title" />
    <input type="text" v-model="value" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      value: "",
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["createField"]),
    submit() {
      if (this.title.trim() && this.value.trim()) {
        this.createField({
          id: Date.now(),
          title: this.title,
          value: this.value,
          parentId: this.id,
        });
        this.title = this.value = "";
      }
    },
  },
};
</script>
