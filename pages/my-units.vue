<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">所持キャラ選択</h1>
      <p>所持しているキャラクターにチェックを入れてください。</p>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="キャラクターを検索"
        placeholder="キャラクター名を入力..."
        outlined
        hide-details
        class="unit-search-box"
      ></v-text-field>

      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :items-per-page="100"
        :footer-props="{
          'items-per-page-options': [10, 20, 50, 100, 200, 300, 400, 500, -1],
          showFirstLastPage: true,
        }"
        :loading="loading"
        :search="search"
        item-key="id"
        checkbox-color="primary"
        multi-sort
        show-select
        locale="ja-JP"
        loading-text="データを読み込んでいます..."
        no-data-text="データがありません。"
        @item-selected="saveMyUnit()"
        @toggle-select-all="saveMyUnit()"
      >
        <template #[`item.img1`]="{ item }">
          <UnitImg :id="item.id1" />
        </template>
        <template #[`item.img2`]="{ item }">
          <UnitImg v-if="item.img2" :id="item.id2" />
        </template>
        <template #[`item.img3`]="{ item }">
          <UnitImg v-if="item.img3" :id="item.id3" />
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
      charaLv: 30,
      selected: [],
      headers: [
        { text: 'No.', value: 'id' },
        {
          text: '画像',
          sortable: false,
          value: 'img1',
        },
        {
          text: 'キャラクター名',
          align: 'start',
          sortable: false,
          value: 'name1',
        },
        {
          text: '画像',
          sortable: false,
          value: 'img2',
        },
        {
          text: 'キャラクター名',
          align: 'start',
          sortable: false,
          value: 'name2',
        },
        {
          text: '画像',
          sortable: false,
          value: 'img3',
        },
        {
          text: 'キャラクター名',
          align: 'start',
          sortable: false,
          value: 'name3',
        },
      ],
      items: [],
    }
  },
  head() {
    return {
      title: '所持キャラ選択',
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      try {
        const response = await Axios.get('/tsv/units.tsv')
        const units = this.tsvToJSON(response.data)

        const myUnits = localStorage.getItem('myUnits') || []

        const finalUnits = []
        for (const unit of units) {
          if (unit.form !== '1') continue

          const allForm = units.filter((data) => data.unitId === unit.unitId)

          const unitData = {
            id: allForm[0].unitId,
            id1: allForm[0].id,
            name1: allForm[0].name,
            img1: !!allForm[0].id,
            id2: allForm[1]?.id,
            name2: allForm[1]?.name,
            img2: !!allForm[1]?.id,
            id3: allForm[2]?.id,
            name3: allForm[2]?.name,
            img3: !!allForm[2]?.id,
          }

          finalUnits.push(unitData)
          if (myUnits.includes(allForm[0].unitId)) {
            this.selected.push(unitData)
          }
        }

        this.items = finalUnits
      } catch (e) {
        alert(`エラーが発生しました。\n${e}`)
      }
      this.loading = false
    },
    saveMyUnit() {
      setTimeout(() => {
        const myUnits = this.selected.map((item) => item.id)
        localStorage.setItem('myUnits', JSON.stringify(myUnits))
      }, 500)
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
