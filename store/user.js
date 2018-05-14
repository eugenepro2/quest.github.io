import Firebase from 'firebase'

class User{
  constructor(id){
    this.id = id
  }
}

export default{
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    loginUser({commit}, {email, password}){

    }
  },
  getters: {
    user(state){
      return state.user
    }
  }
}