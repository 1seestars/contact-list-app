<template>
  <ul>
    <ContactItem
      v-for="contact of allContacts"
      :key="contact.id"
      v-bind:contact="contact"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import ContactItem from "@/components/ContactItem";
export default {
  name: "ContactList",
  computed: mapGetters(["allContacts"]),
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
