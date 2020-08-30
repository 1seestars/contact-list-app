<template>
  <li>
    <span>
      <router-link :to="{ name: 'ContactInfo', params: { id: contact.id } }">{{
        contact.name
      }}</router-link>
    </span>
    <button @click="() => removeContact(contact.id)">&times;</button>
  </li>
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
  methods: mapMutations(["removeContact"]),
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  margin: 1% 20%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 1.5%;
}

button {
  width: 20px;
  height: 20px;
  border-radius: 50px;
  border: 0;
  background: rgb(228, 98, 98);
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: rgb(226, 58, 58);
}
</style>
