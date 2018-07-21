<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6>
        <v-btn :to="task.url" v-for="task in tasks" :key="task" block color="info">{{task.title}}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  let tasks = [
    {
      title: 'Задание 1',
      url: '/task/1'
    },
    {
      title: 'Задание 2',
      url: '/task/2'
    },
    {
      title: 'Задание 3',
      url: '/task/3'
    },
    {
      title: 'Задание 4',
      url: '/task/4'
    },
    {
      title: 'Задание 5',
      url: '/task/5'
    },
    {
      title: 'Задание 6',
      url: '/task/6'
    },
    {
      title: 'Задание 7',
      url: '/task/7'
    },
    {
      title: 'Задание 8',
      url: '/task/8'
    },
    {
      title: 'Задание 9',
      url: '/task/9'
    },
    {
      title: 'Задание 10',
      url: '/task/10'
    }
  ]

  export default {
    data () {
      return {tasks}
    }
  }
</script>
