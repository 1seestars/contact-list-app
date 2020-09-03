<template>
  <div>
    <div id="contactInfoHeader">
      <div id="contactInfoHeaderButtons">
        <router-link to="/"
          ><button id="backButton">
            <span>&#8249; Back</span>
          </button>
        </router-link>
        <button
          v-bind:class="{ done: disableActionCancelButton }"
          @click="cancelLastAction($route.params.id)"
          id="undoButton"
        >
          Undo
        </button>
      </div>
      <div id="addNewField">
        <AddField v-bind:id="$route.params.id" />
      </div>
    </div>
    <hr />

    <div v-if="currentContact">
      {{ currentContact.name }}<br />
      {{ currentContact.number }}
      <ul>
        <ContactField
          v-for="field of actualFields"
          :key="field.id"
          v-bind:field="field"
        />
      </ul>
    </div>
    <div v-else><p>No such contact!</p></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddField from "@/components/fields/AddField";
import ContactField from "@/components/fields/ContactField";
export default {
  name: "ContactInfo",
  computed: {
    ...mapGetters(["getAllContacts", "getCurrentContactHistory"]),
    currentContact() {
      return this.getAllContacts.find(
        (item) => item.id === this.$route.params.id
      );
    },
    actualFields() {
      console.log(this.getCurrentContactHistory);
      return this.getCurrentContactHistory[
        this.getCurrentContactHistory.length - 1
      ];
    },
    disableActionCancelButton() {
      if (!this.getCurrentContactHistory[1]) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: mapMutations(["cancelLastAction", "inititalizeHistory"]),
  mounted() {
    this.inititalizeHistory(this.$route.params.id);
  },
  components: {
    AddField,
    ContactField,
  },
};
</script>

<style scoped>
#contactInfoHeader {
  display: flex;
}

#contactInfoHeader div {
  padding: 2vw 3vw;
  font-weight: 700;
}

#contactInfoHeaderButtons {
  flex: 2;
  text-align: left;
}

#addNewField {
  flex: 3;
  text-align: right;
}

.done {
  display: none;
}

hr {
  opacity: 0.3;
  margin: 0 3vw 2vw;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  background: #9fc9d7;
  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 5px 10px 10px 0px rgba(159, 201, 215, 0.7);
  transition: 0.5s;
  outline: none;
  opacity: 0.85;
}

#backButton {
  background: #edd1ef;
  box-shadow: 5px 10px 10px 0px rgba(237, 209, 239, 0.7);
}

#backButton:active {
  box-shadow: 2px 4px 1px 0px rgba(237, 209, 239, 0.7);
}

#undoButton {
  margin-left: 20px;
  background: #f45d5d;
  box-shadow: 5px 10px 10px 0px rgba(244, 93, 93, 0.7);
}

#undoButton:active {
  background: #f45d5d;
  box-shadow: 2px 4px 1px 0px rgba(244, 93, 93, 0.7);
}

button:active {
  transform: scale(0.9);
  box-shadow: 2px 4px 1px 0px rgba(159, 201, 215, 0.7);
}

button:hover {
  opacity: 1;
}

button:focus {
  opacity: 1;
}

p {
  color: #666666;
  font-weight: 500;
}
</style>
