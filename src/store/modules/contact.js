export default {
  actions: {},
  mutations: {
    // create new contact
    createNewContact(state, newContact) {
      state.contacts.push(newContact);
    },
    // remove contact
    removeContact(state, id) {
      state.contacts = state.contacts.filter((item) => item.id !== id);
    },
    // create new field in choosed contact
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
    // remove field in choosed contact
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
    // push current field values to buffer
    setFieldToChange(state, { fieldId, parentId }) {
      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );

      state.currentChangeField = state.contacts[contactIndex].fields.find(
        (item) => item.id === fieldId
      );
    },
    // manual clear buffer
    clearFieldToChange(state) {
      state.currentChangeField = {};
    },
    // add new values to field and clear buffer
    changeField(state, { changedField, contactIndex, fieldIndex }) {
      state.contacts[contactIndex].fields[fieldIndex] = { ...changedField };

      this.commit(
        "setContactFieldsToHistory",
        state.contacts[contactIndex].fields
      );
    },
    // undo function
    cancelLastAction(state, parentId) {
      state.currentContactHistory.pop();

      const contactIndex = state.contacts.findIndex(
        (item) => item.id === parentId
      );

      state.contacts[contactIndex].fields = [
        ...state.currentContactHistory[state.currentContactHistory.length - 1],
      ];
    },
    // making new snapshot of current version of state
    setContactFieldsToHistory(state, fields) {
      state.currentContactHistory = [
        ...state.currentContactHistory,
        [...fields],
      ];
    },
    // push current fields to history after opening contact
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
    // returns all state
    getAllContacts(state) {
      return state.contacts;
    },
    // returns number of contacts
    contactsCount(state) {
      return state.contacts.length;
    },
    // returns buffer
    getCurrentChangeField(state) {
      return state.currentChangeField;
    },
    // returns array of state snapshots
    getCurrentContactHistory(state) {
      return state.currentContactHistory;
    },
  },
};
