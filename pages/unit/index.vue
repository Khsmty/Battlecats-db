<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">味方キャラステータス</h1>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="キャラクターを検索..."
        single-line
        hide-details
        class="unit-search-box"
      ></v-text-field>

      <v-row justify="right">
        <v-col cols="6" sm="3" md="2">
          <v-text-field
            v-model="charaLv"
            prefix="Lv."
            append-outer-icon="mdi-check"
            @click:append-outer="lvChange"
          />
        </v-col>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="100"
        :footer-props="{
          'items-per-page-options': [10, 20, 50, 100, 200, 300, 400, 500, -1],
          showFirstLastPage: true,
        }"
        :loading="loading"
        :search="search"
        multi-sort
        locale="ja-JP"
        loading-text="データを読み込んでいます..."
        no-data-text="データがありません。"
      >
        <template #[`item.img`]="{ item }">
          <UnitImg :no="item.no" />
        </template>
        <template #[`item.name`]="{ item }">
          <nuxt-link :to="'/unit/' + item.no.slice(0, 3)" class="list-link">{{
            item.name
          }}</nuxt-link>
        </template>
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      loading: true,
      search: '',
      charaLv: 30,
      headers: [
        { text: 'No.', value: 'no' },
        { text: 'ランク', value: 'rank' },
        {
          text: '画像',
          sortable: false,
          value: 'img',
        },
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
  head() {
    return {
      title: '味方キャラクター一覧',
    }
  },
  async mounted() {
    try {
      const charaLv = this.$route.query.lv || 30

      this.charaLv = charaLv

      const response = await Axios.get(
        `https://script.google.com/macros/s/AKfycbzuwyRlArUbcICxCjN5YfU5O8UnNimTWyO8CiIpdcUshEfK-4wkIk-9TKWhVRkLDQgPxg/exec?level=${charaLv}`
      )
      const units = response.data

      this.items = units
    } catch (e) {
      alert(`エラーが発生しました。\n${e}`)
    }
    this.loading = false
  },
  methods: {
    lvChange() {
      this.$router.replace({
        path: this.$route.path,
        query: { ...this.$route.query, lv: this.charaLv },
      })
      this.$router.$forceUpdate()
    },
  },
}
</script>
