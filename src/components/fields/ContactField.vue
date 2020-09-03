<template>
  <li>
    <span>
      {{ field.title + " " + field.value }}
    </span>
    <button
      @click="setFieldToChange({ fieldId: field.id, parentId: field.parentId })"
    >
      Change
    </button>
    <button @click="removeChoosenField">
      &times;
    </button>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["removeField", "setFieldToChange"]),
    removeChoosenField() {
      if (confirm("Are you shure?")) {
        this.removeField({
          fieldId: this.field.id,
          parentId: this.field.parentId,
        });
      }
    },
  },
};
</script>
