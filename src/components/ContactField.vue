<template>
  <li>
    <span>
      {{ field.title + " " + field.value }}
    </span>
    <button @click="() => getField({ id: field.id, parentId })">
      Change
    </button>
    <button @click="() => removeField({ id: field.id, parentId })">
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
    parentId: {
      type: Number,
      required: true,
    },
  },
  methods: mapMutations(["removeField", "getField"]),
};
</script>
