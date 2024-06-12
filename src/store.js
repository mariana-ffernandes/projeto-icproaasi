import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedItem: null,
    selectedDevice: null,
    userType: null
  },
  mutations: {
    setSelectedItem(state, item) {
      state.selectedItem = item;
    },
    setSelectedDevice(state, device) {
      state.selectedDevice = device;
    },
    setUserType(state, userType) {
      state.userType = userType;
    }
  }
});
