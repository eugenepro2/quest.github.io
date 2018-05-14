<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Форма входа</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid"  validation>
            <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email"></v-text-field>
            <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" v-model="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onSubmit">Войти</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    data: () => ({
      email: '',
      password: '',
      valid: false
    }),
    props: {
      source: String
    },
    methods: {
      onSubmit: function(){}
    }
  }
</script>


