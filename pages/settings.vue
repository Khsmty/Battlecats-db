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
        <v-expansion-panel>
          <v-expansion-panel-header>
            バックアップと復元
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <h3>バックアップ</h3>
            <p>
              以下のテキストをコピーし、メモ帳などに貼り付けて保管してください。
            </p>
            <CopyBtn :text="localData" style="margin-bottom: 10px" />
            <v-textarea :value="localData" readonly outlined />
            <h3>復元</h3>
            <p>以下にデータを貼り付け、適用ボタンを押してください。</p>
            <v-btn
              color="primary"
              outlined
              block
              style="margin-bottom: 10px"
              @click="restoreData()"
            >
              適用
            </v-btn>
            <v-textarea v-model="restoreText" outlined />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar">{{ snackbarText }}</v-snackbar>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      localData: null,
      restoreText: null,
      snackbar: false,
      snackbarText: null,
    }
  },
  head() {
    return {
      title: '設定',
    }
  },
  mounted() {
    const localData = []
    for (const key in localStorage) {
      const value = localStorage.getItem(key)
      if (value) {
        localData.push({ key, value })
      }
    }
    this.localData = JSON.stringify(localData)
  },
  methods: {
    changeTheme() {
      localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light')
    },
    restoreData() {
      try {
        const restoreJson = JSON.parse(this.restoreText)
        for (const data of restoreJson) {
          localStorage.setItem(data.key, data.value)
        }
        this.snackbarText = '設定を復元しました'
        this.snackbar = true
      } catch (e) {
        this.snackbarText = '設定の復元に失敗しました'
        this.snackbar = true
      }
    },
  },
}
</script>
