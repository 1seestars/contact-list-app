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
      state.contacts = state.contacts.filter((item) => item.id !== id);
    },
    removeField(state, { id, parentId }) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );
      state.contacts[contactIndex].fields = state.contacts[
        contactIndex
      ].fields.filter((item) => item.id !== id);
    },
  },
  state: {
    contacts: [],
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    contactsCount(state) {
      return state.contacts.length;
    },
  },
};
