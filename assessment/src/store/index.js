import { createStore } from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';


export default createStore({
  state: {
    endpoint: process.env.VUE_APP_ENDPOINT,
    user: null,
    token: null, 
    notification: {
        type: 0,
        message: ''
    }  
  },
  getters,
  mutations,
  actions
})
