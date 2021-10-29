<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">味方キャラステータス</h1>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="キャラクターを検索"
        placeholder="キャラクター名やステータスを入力..."
        outlined
        hide-details
        class="unit-search-box"
      ></v-text-field>

      <v-row>
        <v-col cols="6" sm="3" md="2">
          <v-text-field
            v-model="charaLv"
            outlined
            dense
            hide-details="auto"
            prefix="Lv."
            @change="fetchData"
          />
        </v-col>
        <v-col cols="6" sm="3" md="2">
          <v-select
            v-model="filterByMyUnit"
            :items="filterByMyUnitOpt"
            outlined
            dense
            label="所持状況で絞り込み"
          ></v-select>
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
          <UnitImg :id="item.id" />
        </template>
        <template #[`item.name`]="{ item }">
          <nuxt-link :to="'/unit/' + item.id.slice(0, 3)" class="list-link">{{
            item.name
          }}</nuxt-link>
        </template>
        <template #[`item.myUnit`]="{ item }">
          <div v-if="item.myUnit">🔵</div>
          <div v-else>-</div>
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
      search: null,
      charaLv: '30',
      onlyMyUnits: false,
      headers: [
        { text: 'No.', value: 'id' },
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
        { text: '所持', value: 'myUnit', filter: this.myUnitFilter },
      ],
      items: [],
      filterByMyUnit: null,
      filterByMyUnitOpt: [
        { text: 'しない', value: null },
        { text: '所持キャラのみ', value: 1 },
        { text: '未所持キャラのみ', value: 2 },
      ],
    }
  },
  head() {
    return {
      title: '味方キャラクター一覧',
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      try {
        const response = await Axios.get(
          `https://battlecats-api.tubuanha.repl.co/unitlist?level=${this.charaLv}`
        )
        const units = response.data

        const myUnits = JSON.parse(localStorage.getItem('myUnits'))
        if (myUnits) {
          for (const unit of units) {
            if (myUnits.includes(unit.unitId)) {
              unit.myUnit = true
            }
          }
        }

        this.items = units
      } catch (e) {
        alert(`エラーが発生しました。\n${e}`)
      }
      this.loading = false
    },
    myUnitFilter(value) {
      if (!this.filterByMyUnit) {
        return true
      } else if (this.filterByMyUnit === 1) {
        return value
      } else if (this.filterByMyUnit === 2) {
        return !value
      }
    },
    tsvToJSON(tsv) {
      const lines = tsv.split('\n')
      const result = []
      const headers = lines[0].split('\t')

      for (let i = 1; i < lines.length; i++) {
        const obj = {}
        const currentline = lines[i].split('\t')

        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j]
        }

        result.push(obj)
      }

      return result
    },
  },
}
</script>
