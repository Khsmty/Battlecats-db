<template>
  <v-dialog
    v-model="dialog"
    hide-overlay
    transition="dialog-bottom-transition"
    fullscreen
  >
    <template #activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>
    <v-card class="setting-card">
      <v-toolbar color="primary">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>設定</v-toolbar-title>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>一般</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="darkMode" @change="toggleTheme"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ダークモード</v-list-item-title>
            <v-list-item-subtitle>
              画面のちらつきを防止し、消費電力を抑えます。
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      darkMode: false,
    }
  },
  mounted() {
    const theme = localStorage.getItem('theme')
    if (theme && theme === 'dark') {
      this.$vuetify.theme.dark = true
      this.darkMode = true
    } else {
      this.$vuetify.theme.dark = false
    }
  },
  methods: {
    toggleTheme() {
      const newTheme = this.$vuetify.theme.dark ? 'light' : 'dark'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('theme', newTheme)
    },
  },
}
</script>

<style>
.v-dialog {
  position: initial;
  max-width: 500px;
  margin: 0;
  height: 100%;
}

@media screen and (min-width: 501px) {
  .v-dialog {
    height: auto;
  }
  .setting-card {
    min-height: 600px !important;
  }
}
</style>
