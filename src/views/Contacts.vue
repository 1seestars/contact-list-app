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
      <span class="noItemsSign" v-else>No contacts!</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContactList from "@/components/contacts/ContactList";
import AddContact from "@/components/contacts/AddContact";
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
  box-sizing: border-box;
  display: flex;
  position: sticky;
  top: -20px;
  border-radius: 10px;
  background: white;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5032387955182073) 10%,
    rgba(255, 255, 255, 1) 20%
  );
  z-index: 10;
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

.noItemsSign {
  display: inline-block;
  margin: 0.7vw 0;
  color: #666666;
  font-weight: 500;
}

@media (max-width: 830px) {
  #contactListHeader {
    display: block;
    top: 0px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5032387955182073) 5%,
      rgba(255, 255, 255, 1) 10%
    );
    text-align: center;
  }

  #contactsCount {
    font-size: 16px;
  }

  #addNewContact {
    text-align: center;
  }
}
</style>
