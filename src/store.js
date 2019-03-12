import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: "1",
        name: "Tony",
        phone: "01099128812",
        group: "Red"
      },
      {
        id: "2",
        name: "Leo",
        phone: "01099128813",
        group: "Blue"
      },
      {
        id: "3",
        name: "Bell",
        phone: "01012345678",
        group: "Red"
      },
      {
        id: "4",
        name: "Lee",
        phone: "01043621234",
        group: "Yellow"
      }
    ],
  },
  mutations: {
    removeUser(state, id) {
      state.users = state.users.filter(user => user.id !== id);
    },
    addUser(state, user) {
      state.users.push(user);
    },
    updateUser(state, user) {
      const userIndex = state.users.findIndex(({ id }) => id === user.id);

      Vue.set(state.users, userIndex, user);
    }
  },
  actions: {
    removeUser({ commit }, id) {
      commit('removeUser', id);
    },
    addUser({ commit }, user) {
      commit('addUser', user);
    },
    updateUser({ commit}, user) {
      commit('updateUser', user)
    }
  }
})

