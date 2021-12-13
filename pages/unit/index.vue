<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">味方キャラステータス</h1>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="キャラクター検索"
        placeholder="キャラクター名やステータスを入力..."
        outlined
        clearable
        clear-icon="mdi-close-circle"
        hide-details
        class="unit-search-box"
      />

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
        :mobile-breakpoint="0"
        multi-sort
        locale="ja-JP"
        loading-text="データを読み込んでいます..."
        no-data-text="データがありません。"
        no-results-text="一致するデータが見つかりません。"
      >
        <template #[`item.img`]="{ item }">
          <UnitImg :id="item.id" />
        </template>
        <template #[`item.name`]="{ item }">
          <nuxt-link :to="'/unit/' + item.id.slice(0, 3)" class="list-link">{{
            item.name
          }}</nuxt-link>
        </template>
      </v-data-table>

      <v-sheet height="50"></v-sheet>
    </v-col>

    <!-- Customize menu -->
    <UnitCustom
      :charalv="charaLv"
      :instincttoggle="instinct"
      :instinctatk="instinctAtk"
      :instincthp="instinctHp"
      :andor="andOr"
      :filterbyenemycolor="filterByEnemyColor"
      @changeSettings="changeSettings($event, settings)"
    />
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      search: null,
      charaLv: '30',
      instinct: false,
      instinctAtk: '0',
      instinctHp: '0',
      headers: [
        { text: 'No.', value: 'id' },
        { text: 'ランク', value: 'rarity' },
        {
          text: '画像',
          sortable: false,
          value: 'img',
        },
        {
          text: 'キャラクター名',
          align: 'start',
          value: 'name',
        },
        { text: '体力', value: 'hp' },
        { text: 'KB', value: 'kb' },
        { text: '速度', value: 'speed' },
        { text: '攻撃力', value: 'atk' },
        { text: 'DPS', value: 'dps' },
        { text: '範囲', value: 'reach' },
        { text: '頻度F', value: 'atkFrequency' },
        { text: '発生F', value: 'atkOccurrence' },
        { text: '射程', value: 'range' },
        { text: 'コスト', value: 'cost' },
        { text: '再生産F', value: 'reproduction' },
        {
          text: '色',
          value: 'enemy',
          align: ' d-none',
          filter: this.enemyColorFilter,
        },
      ],
      items: [],
      andOr: 'o',
      filterByEnemyColor: [],
    }
  },
  head() {
    return {
      title: '味方キャラクター一覧',
    }
  },
  mounted() {
    this.charaLv = localStorage.getItem('charaLv') || '30'
    this.instinct = localStorage.getItem('instinct') === 'true'
    this.instinctAtk = localStorage.getItem('instinctAtk') || '0'
    this.instinctHp = localStorage.getItem('instinctHp') || '0'

    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      const units = await this.$axios.$get(
        `https://battlecats-db.vercel.app/api/unit-list?level=${
          this.charaLv
        }&instinct=${this.instinct ? 'true' : 'false'}&instinct_atk=${
          this.instinctAtk
        }&instinct_hp=${this.instinctHp}`
      )

      const myUnits = JSON.parse(localStorage.getItem('myUnits'))
      if (myUnits) {
        for (const unit of units) {
          if (myUnits.includes(unit.unitId)) {
            unit.myUnit = true
          }
        }
      }

      this.items = units
      this.loading = false
    },
    enemyColorFilter(value) {
      if (this.filterByEnemyColor.length === 0) {
        return true
      } else if (this.andOr === 'o') {
        return this.filterByEnemyColor.some((color) => value.includes(color))
      } else {
        return this.filterByEnemyColor.every((color) => value.includes(color))
      }
    },
    changeSettings(settings) {
      for (const setting in settings) {
        this[setting] = settings[setting]
      }

      this.fetchData()
    },
  },
}
</script>
