<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">
        No.{{ unitData[0].meta.no.slice(0, 3) }}・{{
          unitData.map((d) => d.meta.name).join(' / ')
        }}
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
            <v-col
              v-for="status of result.status"
              :key="status"
              cols="12"
              sm="4"
              md="4"
            >
              <v-simple-table>
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
export default {
  async asyncData({ $axios, params, error }) {
    const results = await $axios.$get(
      'https://script.google.com/macros/s/AKfycbzuwyRlArUbcICxCjN5YfU5O8UnNimTWyO8CiIpdcUshEfK-4wkIk-9TKWhVRkLDQgPxg/exec',
      {
        params: {
          type: 'unit-detail',
          no: params.unitNo,
          level: '30',
        },
      }
    )

    if (String(params.unitNo).length !== 3 || !results[0]) {
      error({ statusCode: 404 })
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
    return { unitData }
  },
}
</script>
