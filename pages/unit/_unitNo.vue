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
      <h1 class="page-title">
        No.{{ unitData[0].meta.no.slice(0, 3) }}
        {{ unitData.map((d) => d.meta.name).join(' / ') }}
      </h1>
    </v-col>
    <v-col
      v-for="result of unitData"
      :key="result.meta.no"
      cols="12"
      sm="10"
      md="9"
    >
      <v-card>
        <v-card-title class="headline">
          {{ result.meta.no }} {{ result.meta.name }}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="3" md="2">
              <UnitImg :no="result.meta.no.slice(0, 3)" />
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
      title: `No.${this.$route.params.unitNo} ${this.unitData
        .map((d) => d.meta.name)
        .join(' / ')} - 味方キャラクター`,
    }
  },
  async mounted() {
    try {
      if (String(this.$route.params.unitNo).length !== 3) {
        this.$nuxt.error({ statusCode: 404 })
      }

      const response = await Axios.get(
        `https://script.google.com/macros/s/AKfycbzuwyRlArUbcICxCjN5YfU5O8UnNimTWyO8CiIpdcUshEfK-4wkIk-9TKWhVRkLDQgPxg/exec?no=${this.$route.params.unitNo}&level=30`
      )
      const results = response.data

      if (!results[0]) {
        this.$nuxt.error({ statusCode: 404 })
      }

      const unitData = []
      for (const data of results) {
        unitData.push({
          meta: {
            no: data.no,
            name: data.name,
          },
          status: [
            [
              {
                title: '体力',
                value: data.health,
              },
              {
                title: '攻撃力',
                value: data.attack,
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
                value: data.atkFreq,
              },
              {
                title: '攻撃発生F',
                value: data.atkOccu,
              },
              {
                title: '再生産F',
                value: data.again,
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
