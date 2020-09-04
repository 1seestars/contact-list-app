<template>
  <li v-bind:class="{ changing: !!getCurrentChangeField.title }">
    <div class="fieldsInfo">
      <span>
        {{ field.title }}
      </span>
    </div>
    <div class="fieldsInfo fieldsInfoValue">
      <span>
        {{ field.value }}
      </span>
    </div>
    <div id="fieldsActionButtons">
      <button
        @click="
          setFieldToChange({ fieldId: field.id, parentId: field.parentId })
        "
        id="changeButton"
        v-bind:disabled="!!getCurrentChangeField.title"
        v-bind:class="{ changing: !!getCurrentChangeField.title }"
      >
        Change
      </button>
      <button
        @click="removeChoosenField"
        id="deleteButton"
        v-bind:disabled="!!getCurrentChangeField.title"
        v-bind:class="{ changing: !!getCurrentChangeField.title }"
      >
        Delete
      </button>
    </div>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
  },
  computed: mapGetters(["getCurrentChangeField"]),
  methods: {
    ...mapMutations(["removeField", "setFieldToChange"]),
    removeChoosenField() {
      if (confirm("Are you shure?")) {
        this.removeField({
          fieldId: this.field.id,
          parentId: this.field.parentId,
        });
      }
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  padding: 1vw 3vw;
}

.changing {
  opacity: 0.5;
  cursor: not-allowed;
}

.fieldsInfo {
  flex: 1;
  text-align: left;
  color: #666;
  font-weight: 700;
}

.fieldsInfoValue {
  font-style: italic;
  color: #999;
}

#fieldsActionButtons {
  flex: 2;
  text-align: right;
}

button {
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 32px;
  background: #9fc9d7;
  color: white;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 5px 10px 10px 0px rgba(159, 201, 215, 0.5);
  transition: 0.3s;
  outline: none;
  opacity: 0.85;
}

#changeButton {
  background: #ffc46d;
  box-shadow: 5px 10px 10px 0px rgba(255, 196, 109, 0.5);
}

#changeButton:active {
  box-shadow: 2px 4px 1px 0px rgba(255, 196, 109, 0.5);
}

#deleteButton {
  margin-left: 20px;
  background: #f45d5d;
  box-shadow: 5px 10px 10px 0px rgba(244, 93, 93, 0.5);
}

#deleteButton:active {
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
</style>
