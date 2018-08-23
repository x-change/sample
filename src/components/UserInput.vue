<template>
  <tr>
    <td>{{ seq }}</td>
    <td><input type="text" placeholder="Group" v-model="group"/></td>
    <td><input type="text" placeholder="Name" v-model="name"/></td>
    <td>
    <input
        type="text"
        placeholder="Phone"
        v-model="phone"
        @keyup.ctrl.enter="handleButtonClick"
    />
    </td>
    <td>
        <button type="button" @click="handleButtonClick">{{ buttonText }}</button>
    </td>
  </tr>       
</template>
<script>
export default {
  name: "userInput",
  props: {
    seq: {
      default: 'NEW',
    },
    user: {
      default () {
        return {
          group: '',
          name: '',
          phone: '',
        }
      }
    },
    buttonText: {
      default: '',
    }
  },
  data() {
    return {
      group: this.user.group,
      name: this.user.name,
      phone: this.user.phone
    };
  },
  methods: {
    handleButtonClick() {
      const { group, name, phone } = this;

      this.$emit("buttonClick", { group, name, phone });
    }
  }
};
</script>