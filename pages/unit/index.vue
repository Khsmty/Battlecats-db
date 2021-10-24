<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1 class="page-title">味方キャラステータス</h1>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="100"
        :footer-props="{
          'items-per-page-options': [10, 20, 50, 100, 200, 300, 400, 500, -1],
          showFirstLastPage: true,
        }"
        :loading="loading"
        multi-sort
        locale="ja-JP"
        loading-text="読み込み中... しばらくお待ちください。"
        no-data-text="データがありません。"
        dense
      ></v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      headers: [
        { text: 'No.', value: 'no' },
        { text: 'ランク', value: 'rank' },
        {
          text: 'キャラクター名',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: '体力', value: 'health' },
        { text: 'KB', value: 'kb' },
        { text: '速度', value: 'speed' },
        { text: '攻撃力', value: 'attack' },
        { text: 'DPS', value: 'dps' },
        { text: '範囲', value: 'range' },
        { text: '頻度F', value: 'atkFreq' },
        { text: '発生F', value: 'atkOccu' },
        { text: '射程', value: 'reach' },
        { text: 'コスト', value: 'cost' },
        { text: '再生産F', value: 'again' },
      ],
      items: [],
    }
  },
  async mounted() {
    this.loading = true
    try {
      const response = await Axios.get(
        'https://script.google.com/macros/s/AKfycbzuwyRlArUbcICxCjN5YfU5O8UnNimTWyO8CiIpdcUshEfK-4wkIk-9TKWhVRkLDQgPxg/exec?type=unit-list&level=30'
      )
      const units = response.data

      this.items = units
      this.total = units.length
    } catch (e) {
      alert(`エラーが発生しました。\n${e}`)
    }
    this.loading = false
  },
}
</script>
