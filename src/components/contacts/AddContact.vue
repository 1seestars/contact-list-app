<template>
  <form @submit.prevent="submit">
    <div class="headerInputs">
      <input type="text" placeholder="Name" v-model="name" required />
      <input type="number" placeholder="Number" v-model="number" required />
    </div>
    <button type="submit">Create</button>
  </form>
</template>

<script>
const uniqid = require("uniqid");
import { mapMutations } from "vuex";
export default {
  // here we accumulate data from inputs
  data() {
    return {
      name: "",
      number: "",
    };
  },
  methods: {
    ...mapMutations(["createNewContact"]),
    // creating new contact with data user entered
    submit() {
      if (this.name.trim() && this.number.trim()) {
        this.createNewContact({
          id: uniqid(),
          name: this.name.trim(),
          number: this.number.trim(),
          fields: [],
        });
        this.name = "";
        this.number = "";
      }
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  height: 32px;
  margin: 0 5px;
  font-size: 16px;
  transition: 0.5s;
  color: #777777;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  background: #89c4d8;
  color: white;
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 0 20px;
  cursor: pointer;
  box-shadow: 5px 10px 10px 0px rgba(137, 196, 216, 0.5);
  transition: 0.3s;
  outline: none;
  opacity: 0.85;
}

.headerInputs {
  display: inline-block;
}

button:active {
  transform: scale(0.9);
  box-shadow: 2px 4px 1px 0px rgba(137, 196, 216, 0.5);
}

button:hover {
  opacity: 1;
}

button:focus {
  opacity: 1;
}

@media (max-width: 830px) {
  input {
    width: 70%;
    height: 24px;
    margin: 1vw;
  }

  button {
    display: block;
    width: 80px;
    height: 32px;
    font-size: 15px;
    margin: 1vw auto;
    box-shadow: none;
  }
}
</style>
