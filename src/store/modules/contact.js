export default {
  actions: {},
  mutations: {
    createNewContact(state, newContact) {
      state.contacts.push(newContact);
    },
    removeContact(state, id) {
      state.contacts = state.contacts.filter((item) => item.id !== id);
    },
    createNewField(state, newField) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === newField.parentId
      );

      state.contacts[contactIndex].fields.push(newField);

      this.commit(
        "setContactFieldsToHistory",
        state.contacts[contactIndex].fields
      );
    },
    removeField(state, { fieldId, parentId }) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );

      state.contacts[contactIndex].fields = state.contacts[
        contactIndex
      ].fields.filter((item) => item.id !== fieldId);

      this.commit(
        "setContactFieldsToHistory",
        state.contacts[contactIndex].fields
      );

      this.commit("clearFieldToChange");
    },
    setFieldToChange(state, { fieldId, parentId }) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );

      state.currentChangeField = state.contacts[contactIndex].fields.find(
        (item) => item.id === fieldId
      );
    },
    clearFieldToChange(state) {
      state.currentChangeField = {};
    },
    changeField(state, { changedField, contactIndex, fieldIndex }) {
      state.contacts[contactIndex].fields[fieldIndex] = { ...changedField };

      this.commit(
        "setContactFieldsToHistory",
        state.contacts[contactIndex].fields
      );
    },
    cancelLastAction(state, parentId) {
      state.currentContactHistory.pop();

      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );

      state.contacts[contactIndex].fields = [
        ...state.currentContactHistory[state.currentContactHistory.length - 1],
      ];
    },
    setContactFieldsToHistory(state, fields) {
      state.currentContactHistory = [
        ...state.currentContactHistory,
        [...fields],
      ];
    },
    inititalizeHistory(state, parentId) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );

      state.currentContactHistory = [[...state.contacts[contactIndex].fields]];
    },
  },
  state: {
    contacts: [],
    currentChangeField: {},
    currentContactHistory: [],
  },
  getters: {
    getAllContacts(state) {
      return state.contacts;
    },
    contactsCount(state) {
      return state.contacts.length;
    },
    getCurrentChangeField(state) {
      return state.currentChangeField;
    },
    getCurrentContactHistory(state) {
      return state.currentContactHistory;
    },
  },
};
