<template>
  <li>
    <span>
      {{ field.title + " " + field.value }}
    </span>
    <button v-on:click="$emit('remove-field', field.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  components: {},
};
</script>
