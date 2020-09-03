<template>
  <ul>
    <ContactItem
      v-for="contact of getAllContacts"
      :key="contact.id"
      v-bind:contact="contact"
    />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import ContactItem from "@/components/contacts/ContactItem";
export default {
  name: "ContactList",
  computed: mapGetters(["getAllContacts"]),
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
