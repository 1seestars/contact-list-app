<template>
  <div>
    {{ contact.name }}<br />
    {{ contact.number }}
    <ul>
      <ContactField
        v-for="field of contact.fields"
        v-bind:key="field"
        v-bind:field="field"
        v-on:remove-field="removeField"
      />
    </ul>
    <AddField @add-field="addField" />
  </div>
</template>

<script>
import AddField from "@/components/AddField";
import ContactField from "@/components/ContactField";
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeField(id) {
      this.contact.fields = this.contact.fields.filter(
        (item) => item.id !== id
      );
    },
    addField(field) {
      this.contact.fields.push(field);
    },
  },
  components: {
    AddField,
    ContactField,
  },
};
</script>
