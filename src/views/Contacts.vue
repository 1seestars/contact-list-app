<template>
  <div>
    <div id="contactListHeader">
      <div id="contactsCount">
        <span
          >Contacts <span>{{ this.contactsCount }}</span></span
        >
      </div>
      <div id="addNewContact"><AddContact /></div>
    </div>
    <hr />
    <div>
      <ContactList v-if="contactsCount" />
      <p v-else>No contacts!</p>
    </div>
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

<style scoped>
#contactListHeader {
  display: flex;
}

#contactListHeader div {
  padding: 2vw 3vw;
  font-weight: 700;
}

#contactsCount {
  flex: 1;
  text-align: left;
  font-size: 20px;
  color: #777777;
}

#contactsCount span {
  display: inline-block;
  height: 40px;
  line-height: 20px;
}

#contactsCount span span {
  color: #ccc;
  margin: 12px;
}

#addNewContact {
  flex: 4;
  text-align: right;
}

hr {
  opacity: 0.3;
  margin: 0 3vw 2vw;
}

p {
  color: #666666;
  font-weight: 500;
}
</style>
