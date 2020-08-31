export default {
  actions: {},
  mutations: {
    createContact(state, newContact) {
      state.contacts.push(newContact);
    },
    createField(state, newField) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === newField.parentId
      );
      state.contacts[contactIndex].fields.push(newField);
    },
    removeContact(state, id) {
      confirm("Are you shure?")
        ? (state.contacts = state.contacts.filter((item) => item.id !== id))
        : null;
    },
    removeField(state, { id, parentId }) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );
      state.contacts[contactIndex].fields = state.contacts[
        contactIndex
      ].fields.filter((item) => item.id !== id);
    },
    getField(state, { id, parentId }) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );
      state.currentChangeField = state.contacts[contactIndex].fields.find(
        (item) => item.id === id
      );
    },
    changeField(state, changedField) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === changedField.parentId
      );

      const fieldIndex = state.contacts[contactIndex].fields.findIndex(
        (item) => item.id === changedField.id
      );

      state.currentChangeField = {
        title: "",
        value: "",
      };

      if (
        state.contacts[contactIndex].fields[fieldIndex].title !==
          changedField.title ||
        state.contacts[contactIndex].fields[fieldIndex].value !==
          changedField.value
      ) {
        if (confirm("Do you really want to change this field?")) {
          state.contacts[contactIndex].fields[fieldIndex] = changedField;
          state.fields = [changedField];
        }
      }
    },
  },
  state: {
    contacts: [],
    currentChangeField: {
      title: "",
      value: "",
    },
    fields: [],
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    contactsCount(state) {
      return state.contacts.length;
    },
    currentChangeField(state) {
      return state.currentChangeField;
    },
    currentFields(state) {
      return state.fields;
    },
  },
};
