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
            <v-switch v-model="darkMode" @change="toggleTheme" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ダークモード</v-list-item-title>
            <v-list-item-subtitle>
              画面のちらつきを防止し、消費電力を抑えることができます。
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          @click="
            backupDialog = !backupDialog
            restoreData = null
            loadLocalData()
          "
        >
          <v-list-item-content>
            <v-list-item-title>バックアップと復元</v-list-item-title>
            <v-list-item-subtitle>
              ブラウザに保存したデータをバックアップしたり復元したりできます。
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-dialog v-model="backupDialog" hide-overlay fullscreen>
            <v-card class="setting-card">
              <v-toolbar color="primary">
                <v-btn icon @click="backupDialog = !backupDialog">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-toolbar-title>バックアップと復元</v-toolbar-title>
              </v-toolbar>
              <v-list three-line>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>バックアップ</v-list-item-title>
                    <v-list-item-subtitle>
                      以下のテキストをコピーし、メモ帳などに貼り付けて保存してください。
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn color="primary" outlined @click="copyText(localData)">
                    コピー
                  </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-textarea :value="localData" readonly outlined />
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>復元</v-list-item-title>
                    <v-list-item-subtitle>
                      以下にデータを貼り付け、適用ボタンを押してください。
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn color="primary" outlined @click="restoreLocalData()">
                    適用
                  </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-textarea v-model="restoreData" outlined />
                </v-list-item>
              </v-list>
            </v-card>
            <v-snackbar v-model="snackbar">{{ snackbarText }}</v-snackbar>
          </v-dialog>
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
      backupDialog: false,
      snackbar: false,
      snackbarText: null,
      darkMode: true,
      localData: '[]',
      restoreData: null,
    }
  },
  mounted() {
    const theme = localStorage.getItem('theme')
    if (theme && theme === 'light') {
      this.$vuetify.theme.dark = false
      this.darkMode = false
    } else {
      this.$vuetify.theme.dark = true
    }
  },
  methods: {
    toggleTheme() {
      const newTheme = this.$vuetify.theme.dark ? 'light' : 'dark'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('theme', newTheme)
    },
    copyText(text) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
        this.snackbarText = 'コピーしました！'
        this.snackbar = true
      } else {
        this.snackbarText = 'お使いのブラウザではコピーできません。'
        this.snackbar = true
      }
    },
    loadLocalData() {
      const localData = []
      for (const key in localStorage) {
        const value = localStorage.getItem(key)
        if (value) {
          localData.push({ key, value })
        }
      }
      this.localData = JSON.stringify(localData)
    },
    restoreLocalData() {
      try {
        const restoreData = JSON.parse(this.restoreData)
        for (const data of restoreData) {
          localStorage.setItem(data.key, data.value)
        }
        this.snackbarText = '設定を復元しました！'
        this.snackbar = true
      } catch (e) {
        this.snackbarText = '設定の復元に失敗しました。'
        this.snackbar = true
      }
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
