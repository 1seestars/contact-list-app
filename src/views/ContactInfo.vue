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
          v-bind:class="{
            done: disableActionCancelButton || !!getCurrentChangeField.title,
          }"
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
      <div id="contactInfoBlock">
        <span
          ><strong>{{ name }}</strong
          >'s info
        </span>
      </div>
      <div id="contactNumber">
        <span id="numberSign">number</span>
        <span class="fieldsInfoValue">{{ currentContact.number }}</span>
        <div id="rightSpace"></div>
      </div>
      <ul>
        <ContactField
          v-for="field of actualFields"
          :key="field.id"
          v-bind:field="field"
        />
      </ul>
    </div>
    <span class="noItemsSign" v-else>No such contact!</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddField from "@/components/fields/AddField";
import ContactField from "@/components/fields/ContactField";
export default {
  name: "ContactInfo",
  computed: {
    ...mapGetters([
      "getAllContacts",
      "getCurrentChangeField",
      "getCurrentContactHistory",
    ]),
    // defining contact we have to show on screen
    currentContact() {
      return this.getAllContacts.find(
        (item) => item.id === this.$route.params.id
      );
    },
    name() {
      return (
        this.currentContact.name[0].toUpperCase() +
        this.currentContact.name.slice(1)
      );
    },
    actualFields() {
      return this.getCurrentContactHistory[
        this.getCurrentContactHistory.length - 1
      ];
    },
    // if "history" has less than 1 array, we have to block ability to undo last actions
    disableActionCancelButton() {
      if (!this.getCurrentContactHistory[1]) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: mapMutations([
    "cancelLastAction",
    "inititalizeHistory",
    "clearFieldToChange",
  ]),
  // after component mounted we push to history current fields - this is our start point 
  mounted() {
    this.inititalizeHistory(this.$route.params.id);
  },
  // in case we want to leave this component, we need to clear our buffer
  destroyed() {
    this.clearFieldToChange();
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
  box-shadow: 5px 10px 10px 0px rgba(159, 201, 215, 0.5);
  transition: 0.3s;
  outline: none;
  opacity: 0.85;
  text-decoration: none;
}

#backButton {
  background: #ebbfee;
  box-shadow: 5px 10px 10px 0px rgba(235, 191, 238, 0.5);
}

#backButton:active {
  box-shadow: 2px 4px 1px 0px rgba(235, 191, 238, 0.5);
}

#undoButton {
  margin-left: 20px;
  background: #f45d5d;
  box-shadow: 5px 10px 10px 0px rgba(244, 93, 93, 0.5);
}

#undoButton:active {
  background: #f45d5d;
  box-shadow: 2px 4px 1px 0px rgba(244, 93, 93, 0.5);
}

button:active {
  transform: scale(0.9);
  box-shadow: 2px 4px 1px 0px rgba(159, 201, 215, 0.5);
}

button:hover {
  opacity: 1;
}

button:focus {
  opacity: 1;
}

.noItemsSign {
  display: inline-block;
  margin: 0.7vw 0;
  color: #666666;
  font-weight: 500;
}

#contactInfoBlock {
  margin: 0.7vw auto;
  font-size: 20px;
  max-width: 80vw;
  word-wrap: break-word;
}

#contactNumber {
  display: flex;
  text-align: left;
  padding: 1vw 3vw;
}

#contactNumber span {
  flex: 1;
  display: block;
  max-width: 27.9vw;
  word-wrap: break-word;
  font-weight: 700;
}

#rightSpace {
  flex: 1;
}

.fieldsInfoValue {
  font-style: italic;
}

@media (max-width: 830px) {
  #contactInfoHeader {
    display: block;
    top: 0px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5032387955182073) 5%,
      rgba(255, 255, 255, 1) 10%
    );
  }

  button {
    width: 80px;
    height: 32px;
    font-size: 15px;
    box-shadow: none !important;
    text-decoration: none;
  }
  #numberSign {
    min-width: 29.5vw;
  }
  #contactInfoHeader {
    display: block;
  }

  #addNewField {
    text-align: center;
  }

  #contactNumber {
    margin: 50px 0 15px;
  }

  #contactNumber span {
    font-size: 16px;
    max-width: 33.95vw;
    padding-right: 8vw;
  }

  #rightSpace {
    max-width: 60px;
  }
}
</style>
