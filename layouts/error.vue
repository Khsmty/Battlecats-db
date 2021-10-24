<template>
  <v-app dark>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            <div v-if="error.statusCode === 404">
              ページが見つかりません (404)
            </div>
            <div v-else>何らかのエラーが発生しました (500)</div>
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/">ホームへ戻る</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title:
        this.error.statusCode === 404
          ? 'ページが見つかりません (404)'
          : '何らかのエラーが発生しました (500)',
    }
  },
}
</script>
