<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="title" placeholder="Title" />
    <input type="text" v-model="value" placeholder="Value" />
    <button type="submit">{{ buttonTag }}</button>
  </form>
</template>

<script>
const uniqid = require("uniqid");
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      value: "",
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  watch: {
    getCurrentChangeField() {
      this.title = this.getCurrentChangeField.title;
      this.value = this.getCurrentChangeField.value;
    },
  },
  computed: {
    ...mapGetters(["getAllContacts", "getCurrentChangeField"]),
    buttonTag() {
      if (this.getCurrentChangeField.title) {
        return "Change";
      } else {
        return "Add";
      }
    },
  },
  methods: {
    ...mapMutations(["createNewField", "changeField", "clearFieldToChange"]),
    changeCurrentField(changedField) {
      const contactIndex = this.getAllContacts.findIndex(
        (item) => item.id === changedField.parentId
      );

      const fieldIndex = this.getAllContacts[contactIndex].fields.findIndex(
        (item) => item.id === changedField.id
      );

      if (
        this.getAllContacts[contactIndex].fields[fieldIndex].title !==
          changedField.title ||
        this.getAllContacts[contactIndex].fields[fieldIndex].value !==
          changedField.value
      ) {
        if (confirm("Do you really want to change this field?")) {
          this.changeField({
            changedField,
            contactIndex,
            fieldIndex,
          });
        }
      }

      this.clearFieldToChange();
    },
    submit() {
      if (
        this.getCurrentChangeField.title &&
        this.title.trim() &&
        this.value.trim()
      ) {
        this.changeCurrentField({
          id: this.getCurrentChangeField.id,
          title: this.title.trim(),
          value: this.value.trim(),
          parentId: this.getCurrentChangeField.parentId,
        });
      } else if (this.title.trim() && this.value.trim()) {
        this.createNewField({
          id: uniqid(),
          title: this.title.trim(),
          value: this.value.trim(),
          parentId: this.id,
        });
        this.title = "";
        this.value = "";
      }
    },
  },
};
</script>

<style scoped>
input {
  height: 32px;
  margin: 0 5px;
  font-size: 16px;
  transition: 0.5s;
  color: #777777;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  background: #89c4d8;
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 0 20px;
  cursor: pointer;
  box-shadow: 5px 10px 10px 0px rgba(137, 196, 216, 0.5);
  transition: 0.3s;
  outline: none;
  opacity: 0.85;
}

button:active {
  transform: scale(0.9);
  box-shadow: 2px 4px 1px 0px rgba(137, 196, 216, 0.5);
}

button:hover {
  opacity: 1;
}

button:focus {
  opacity: 1;
}
</style>
