<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-btn class="page-title" to="/unit" color="primary" nuxt rounded>
          <v-icon>mdi-arrow-left</v-icon>&nbsp;一覧ページへ
        </v-btn>
      </v-col>
    </v-row>
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
          No.{{ unitData[0].meta.id.slice(0, 3) }}
          {{ unitData.map((d) => d.meta.name).join(' / ') }}
        </h1>
      </v-col>
      <v-col v-if="loading" cols="12" sm="10" md="9">
        <v-card loading>
          <v-card-text class="text-center">
            データを読み込んでいます...
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="result of unitData"
        :key="result.meta.unitId"
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
                :key="String(status)"
                cols="12"
                sm="3"
                md="3"
              >
                <v-simple-table dense>
                  <template #default>
                    <tbody>
                      <tr v-for="data of status" :key="String(data)">
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

      <!-- Customize menu -->
      <UnitCustomMenu
        :list="true"
        :charalv="charaLv"
        :instincttoggle="instinct"
        :instinctatk="instinctAtk"
        :instincthp="instinctHp"
        @changeSettings="changeSettings($event, settings)"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      charaLv: '30',
      instinct: false,
      instinctAtk: '0',
      instinctHp: '0',
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
  mounted() {
    if (String(this.$route.params.unitId).length !== 3) {
      this.$nuxt.error({ statusCode: 404 })
    }

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
        `https://battlecats-db.vercel.app/api/unit-detail?level=${
          this.charaLv
        }&instinct=${this.instinct ? 'true' : 'false'}&instinct_atk=${
          this.instinctAtk
        }&instinct_hp=${this.instinctHp}&id=${this.$route.params.unitId}`
      )

      if (!units[0]) {
        this.$nuxt.error({ statusCode: 404 })
      }

      const unitData = []
      for (const data of units) {
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
      this.loading = false
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
