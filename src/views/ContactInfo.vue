<template>
  <div>
    <AddField v-bind:id="+this.$route.params.id" />
    <div v-if="currentContact.name">
      {{ currentContact.name }}<br />
      {{ currentContact.number }}
      <ul>
        <ContactField
          v-for="field of this.getCurrentContactHistory[
            this.getCurrentContactHistory.length - 1
          ]"
          :key="field.id"
          v-bind:field="field"
          v-bind:parentId="currentContact.id"
        />
      </ul>
    </div>
    <div v-else>No such contact!</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddField from "@/components/AddField";
import ContactField from "@/components/ContactField";
export default {
  name: "ContactInfo",
  data() {
    return {
      currentContact: {},
    };
  },
  computed: mapGetters([
    "allContacts",
    "currentFields",
    "getCurrentContactHistory",
  ]),
  methods: {
    ...mapMutations(["setCurrentContactFields", "clearHistory"]),
    showCurrentContact() {
      this.currentContact = this.allContacts.find(
        (item) => item.id === +this.$route.params.id
      );
    },
  },
  mounted() {
    this.clearHistory();
    this.showCurrentContact();
    this.setCurrentContactFields(+this.$route.params.id);
  },
  components: {
    AddField,
    ContactField,
  },
};
</script>
