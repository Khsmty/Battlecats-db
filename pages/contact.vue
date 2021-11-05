<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="9">
      <v-card>
        <v-card-title class="headline">お問い合わせ</v-card-title>
        <v-card-text v-if="!sended">
          ゲーム内容についてのお問い合わせは受け付けておりません。<br />
          機能追加の要望などもこのフォームへ送信してください。
          <v-form ref="form" v-model="valid" style="margin-top: 1rem">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="お名前"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="メールアドレス"
              outlined
            ></v-text-field>
            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="お問い合わせ内容"
              outlined
            ></v-textarea>
            <v-btn
              color="primary"
              block
              outlined
              :disabled="!valid"
              :loading="sending"
              @click="submit()"
            >
              送信
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-text v-else>
          お問い合わせを送信しました。<br />
          通常は1週間以内に返信します。
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
      valid: false,
      sended: false,
      sending: false,
      nameRules: [(v) => !!v || 'お名前を入力してください。'],
      emailRules: [
        (v) => !!v || 'メールアドレスを入力してください。',
        (v) =>
          /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(v) ||
          'メールアドレスを正しく入力してください。',
      ],
      messageRules: [(v) => !!v || 'お問い合わせ内容を入力してください。'],
    }
  },
  head() {
    return {
      title: 'お問い合わせ',
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate()

      this.sending = true
      Axios.get(
        `https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHgB6Sj5zw5kO8Fju8rH5mjHxzGUHeJk2yT8X-UyxfceiWsA/formResponse?entry.1555029440=${this.name}&entry.2097340096=${this.email}&entry.1445046543=${this.message}`
      ).finally(() => {
        this.sending = false
        this.sended = true
      })
    },
  },
}
</script>
