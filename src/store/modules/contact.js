export default {
  actions: {},
  mutations: {
    createContact(state, newContact) {
      state.contacts.push(newContact);
    },
    removeContact(state, id) {
      state.contacts = state.contacts.filter((item) => item.id !== id);
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
