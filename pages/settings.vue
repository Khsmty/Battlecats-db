<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">設定</h1>
    </v-col>
    <v-col cols="12" sm="10" md="9">
      <v-expansion-panels popout multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>外観</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-switch
              v-model="$vuetify.theme.dark"
              label="ダークモード"
              @click="changeTheme()"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: '設定',
    }
  },
  methods: {
    changeTheme() {
      localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light')
    },
  },
}
</script>
