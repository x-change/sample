import Vue from 'vue'
import Vuex from 'vuex'
import isEmpty from 'lodash/isEmpty';
import * as userApi from './api/userApi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    groupFilter: '',
    users: [],
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
    },
    changeGroupFilter(state, groupFilter) {
      state.groupFilter = groupFilter;
    },
    setUserList(state, users) {
      state.users = users;
    }
  },
  actions: {
    removeUser({ commit }, id) {
      commit('removeUser', id);
    },
    async addUser({ commit }, user) {
      await fetch('/api/user',{
        method: 'POST',
        body: JSON.stringify(user),
      });

      commit('addUser', user);
    },
    updateUser({ commit }, user) {
      commit('updateUser', user)
    },
    changeGroupFilter({ commit }, groupFilter) {
      commit('changeGroupFilter', groupFilter);
    },
    async fetchUserList({ commit }) {
      const data = await userApi.fetchUserList();
      const users = data.map(({ data }) => data);

      commit('setUserList', users);
    },
  },
  getters: {
    filteredUsersByGroup({ users, groupFilter}) {
      if (isEmpty(groupFilter)) return users;

      return users.filter(({ group }) => group === groupFilter);
    },
  }
})

