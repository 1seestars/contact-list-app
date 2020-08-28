<template>
  <ul>
    <ContactItem
      v-for="contact of contacts"
      v-bind:key="contact"
      v-bind:contact="contact"
      v-on:remove-contact="removeContact"
    />
  </ul>
</template>

<script>
import ContactItem from "@/components/ContactItem";
export default {
  props: ["contacts"],
  methods: {
    removeContact(id) {
      this.$emit("remove-contact", id);
    },
  },
  components: {
    ContactItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
