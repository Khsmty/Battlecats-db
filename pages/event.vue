<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="page-title">イベントカレンダー</h1>
      </v-col>
      <v-col
        v-for="event of events"
        :key="String(event)"
        cols="12"
        sm="10"
        md="9"
      >
        <v-card>
          <v-card-title class="headline">
            {{
              new Date(
                Date.now() + 1000 * 60 * 60 * 24 * events.indexOf(event)
              ).toLocaleDateString()
            }}
            ({{
              ['日', '月', '火', '水', '木', '金', '土'][
                new Date(
                  Date.now() + 1000 * 60 * 60 * 24 * events.indexOf(event)
                ).getDay()
              ]
            }})
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template #default>
                <tbody>
                  <tr>
                    <th>1日中</th>
                    <td class="event-list">{{ event[0] }}</td>
                  </tr>
                  <tr v-for="i in 24" :key="i">
                    <th>{{ i - 1 }}:00～</th>
                    <td class="event-list">{{ event[i] }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
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
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      loading: true,
      events: [],
    }
  },
  head() {
    return {
      title: 'イベントカレンダー',
    }
  },
  async mounted() {
    await this.fetchData(0)
    await this.fetchData(1)
    await this.fetchData(2)
    await this.fetchData(3)
    await this.fetchData(4)
    await this.fetchData(5)
    await this.fetchData(6)
    this.loading = false
  },
  methods: {
    async fetchData(date) {
      try {
        const response = await Axios.get(
          `https://battlecats-api.f5.si/eventlist?date=${date}`
        )
        const results = response.data

        this.events.push(results)
      } catch (e) {
        alert(`エラーが発生しました。\n${e}`)
      }
    },
  },
}
</script>
