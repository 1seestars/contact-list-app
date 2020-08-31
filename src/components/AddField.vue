<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="title" />
    <input type="text" v-model="value" />
    <button type="submit">{{ buttonValue }}</button>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      value: "",
      buttonValue: "Add",
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  watch: {
    currentChangeField() {
      this.title = this.currentChangeField.title;
      this.value = this.currentChangeField.value;
      if (this.currentChangeField.title) {
        this.buttonValue = "Change";
      } else {
        this.buttonValue = "Add";
      }
    },
  },
  computed: mapGetters(["currentChangeField"]),
  methods: {
    ...mapMutations(["createField", "changeField"]),
    submit() {
      if (this.currentChangeField.title) {
        this.changeField({
          id: this.currentChangeField.id,
          title: this.title,
          value: this.value,
          parentId: this.currentChangeField.parentId,
        });
      } else if (this.title.trim() && this.value.trim()) {
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
