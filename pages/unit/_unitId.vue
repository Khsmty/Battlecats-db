<template>
  <v-row v-if="loading" justify="center" align="center">
    <v-col cols="12" sm="10" md="9">
      <v-card loading>
        <v-card-text class="text-center">
          データを読み込んでいます...
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else justify="center">
    <v-col cols="12">
      <v-btn class="page-title" to="/unit" color="primary" nuxt rounded>
        <v-icon>mdi-arrow-left</v-icon>&nbsp;一覧ページへ
      </v-btn>
      <h1 class="page-title">
        No.{{ unitData[0].meta.id.slice(0, 3) }}
        {{ unitData.map((d) => d.meta.name).join(' / ') }}
      </h1>
    </v-col>
    <v-col
      v-for="result of unitData"
      :key="result.meta.id"
      cols="12"
      sm="10"
      md="9"
    >
      <v-card>
        <v-card-title class="headline">
          {{ result.meta.id }} {{ result.meta.name }}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" md="2">
              <UnitImg :id="result.meta.id" />
            </v-col>
            <v-col
              v-for="status of result.status"
              :key="status"
              cols="12"
              sm="3"
              md="3"
            >
              <v-simple-table dense>
                <template #default>
                  <tbody>
                    <tr v-for="data of status" :key="data">
                      <th>{{ data.title }}</th>
                      <td>{{ data.value }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
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
      loading: true,
      unitData: [],
    }
  },
  head() {
    return {
      title: `No.${this.$route.params.unitId} ${this.unitData
        .map((d) => d.meta.name)
        .join(' / ')} - 味方キャラクター`,
    }
  },
  async mounted() {
    try {
      if (String(this.$route.params.unitId).length !== 3) {
        this.$nuxt.error({ statusCode: 404 })
      }

      const response = await Axios.get(
        `https://battlecats-api.herokuapp.com/unitdetail?level=30&instinct=false&instinct_atk=0&instinct_hp=0&id=${this.$route.params.unitId}`
      )
      const results = response.data

      if (!results[0]) {
        this.$nuxt.error({ statusCode: 404 })
      }

      const unitData = []
      for (const data of results) {
        unitData.push({
          meta: {
            id: data.id,
            name: data.name,
          },
          status: [
            [
              {
                title: '体力',
                value: data.hp,
              },
              {
                title: '攻撃力',
                value: data.atk,
              },
              {
                title: 'DPS',
                value: data.dps,
              },
              {
                title: '攻撃範囲',
                value: data.range,
              },
            ],
            [
              {
                title: 'KB',
                value: data.kb,
              },
              {
                title: '速度',
                value: data.speed,
              },
              {
                title: '射程',
                value: data.reach,
              },
              {
                title: 'コスト',
                value: data.cost,
              },
            ],
            [
              {
                title: '攻撃頻度F',
                value: data.atkFrequency,
              },
              {
                title: '攻撃発生F',
                value: data.atkOccurrence,
              },
              {
                title: '再生産F',
                value: data.reproduction,
              },
            ],
          ],
        })
      }

      this.unitData = unitData
    } catch (e) {
      alert(`エラーが発生しました。\n${e}`)
    }
    this.loading = false
  },
}
</script>
