export default{
  state: {
    tasks: [
      {
        title: 'Задание 1'
      },
      {
        title: 'Задание 2'
      },
      {
        title: 'Задание 3'
      },
    ]
  },

  actions: {},

  mutations: {},

  getters: {
    tasks(state){
      return state.tasks
    }
  }
}