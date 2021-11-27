<template>
  <div>
    <v-btn color="primary" outlined block @click="copyText()">コピー</v-btn>
    <v-snackbar v-model="snackbar">{{ snackbarText }}</v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      snackbar: false,
      snackbarText: null,
    }
  },
  methods: {
    copyText() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.text)

        this.snackbar = true
        this.snackbarText = 'コピーしました'
      } else {
        this.snackbar = true
        this.snackbarText = 'お使いのブラウザではコピーできません'
      }
    },
  },
}
</script>
