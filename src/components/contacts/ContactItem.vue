<template>
  <div>
    <li>
      <div id="imageContainer">
        <router-link :to="{ name: 'ContactInfo', params: { id: contact.id } }">
          <div id="imageDiv">
            <span>{{ capitalLetter }}</span>
          </div>
        </router-link>
      </div>
      <div id="shortInfo">
        <router-link
          :to="{ name: 'ContactInfo', params: { id: contact.id } }"
          id="link"
        >
          <span id="contactName">{{ name }}</span>
          <span id="contactNumber">{{ number }}</span>
        </router-link>
      </div>
      <div id="buttonContainer">
        <button @click="removeCurrentContact">Delete</button>
      </div>
    </li>
    <hr />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  computed: {
    name() {
      return this.contact.name[0].toUpperCase() + this.contact.name.slice(1);
    },
    number() {
      return this.contact.number;
    },
    capitalLetter() {
      return this.contact.name.toString()[0].toUpperCase();
    },
  },
  methods: {
    ...mapMutations(["removeContact"]),
    removeCurrentContact() {
      if (confirm("Are you shure?")) {
        this.removeContact(this.contact.id);
      }
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  padding: 1vw 3vw;
  font-weight: 700;
}

li span {
  display: inline-block;
  flex: 1;
  text-align: left;
}

li span span:hover {
  text-decoration: underline;
}

#imageContainer {
  flex: 1;
  text-align: left;
}

#imageDiv {
  width: 100px;
  height: 100px;
  background: #a4d9f4;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  border-radius: 50%;
  opacity: 0.5;
  color: #0084c1;
}

#imageDiv {
  text-decoration: none;
}

#buttonContainer {
  flex: 3;
  text-align: right;
  line-height: 100px;
}

#buttonContainer button {
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  background: #f45d5d;
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 0 20px;
  cursor: pointer;
  box-shadow: 5px 10px 10px 0px rgba(244, 93, 93, 0.7);
  transition: 0.5s;
  outline: none;
  opacity: 0.7;
}

#buttonContainer button:active {
  transform: scale(0.9);
  box-shadow: 2px 4px 1px 0px rgba(244, 93, 93, 0.7);
}

#buttonContainer button:hover {
  opacity: 1;
}

#buttonContainer button:focus {
  opacity: 1;
}

hr {
  opacity: 0.3;
  margin: 0 3vw;
}

li:hover {
  background: rgb(236, 236, 236);
}

#shortInfo {
  display: flex;
  align-items: center;
}

#shortInfo span {
  display: block;
}

#contactName {
  font-size: 20px;
  color: #666666;
}

#contactNumber {
  color: #999999;
  font-style: italic;
}

#link {
  text-decoration: none;
}
</style>
