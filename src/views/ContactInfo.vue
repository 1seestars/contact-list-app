<template>
  <div>
    <div v-if="currentContact.name">
      {{ currentContact.name }}<br />
      {{ currentContact.number }}
      <ul>
        <ContactField
          v-for="field of currentContact.fields"
          :key="field.id"
          v-bind:field="field"
          v-bind:parentId="currentContact.id"
        />
      </ul>
      <AddField v-bind:id="+this.$route.params.id" />
    </div>
    <div v-else>No such contact!</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddField from "@/components/AddField";
import ContactField from "@/components/ContactField";
export default {
  name: "ContactInfo",
  data() {
    return {
      currentContact: {},
    };
  },
  computed: mapGetters(["allContacts"]),
  methods: {
    showCurrentContact() {
      this.currentContact = this.allContacts.find(
        (item) => item.id === +this.$route.params.id
      );
    },
  },
  mounted() {
    this.showCurrentContact();
  },
  components: {
    AddField,
    ContactField,
  },
};
</script>
