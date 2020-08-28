<template>
  <div>
    <h2>Contact list</h2>
    <hr />
    <AddContact @add-contact="addContact" />
    <ContactList
      v-if="contacts.length"
      v-bind:contacts="contacts"
      @remove-contact="removeContact"
    />
    <p v-else>No contacts!</p>
  </div>
</template>

<script>
import ContactList from "@/components/ContactList";
import AddContact from "@/components/AddContact";
export default {
  data() {
    return {
      contacts: [],
    };
  },
  methods: {
    removeContact(id) {
      this.contacts = this.contacts.filter((item) => item.id !== id);
    },
    addContact(contact) {
      this.contacts.push(contact);
    },
  },
  components: {
    ContactList,
    AddContact,
  },
};
</script>
