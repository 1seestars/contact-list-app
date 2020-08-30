<template>
  <div>
    <h2>Contact list</h2>
    <hr />
    <AddContact />
    <ContactList v-if="contactsCount" />
    <p v-else>No contacts!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContactList from "@/components/ContactList";
import AddContact from "@/components/AddContact";
export default {
  name: "Contacts",
  computed: mapGetters(["contactsCount"]),
  components: {
    ContactList,
    AddContact,
  },
};
</script>
