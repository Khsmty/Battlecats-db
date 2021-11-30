<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="page-title">イベントカレンダー</h1>
      </v-col>
      <v-col
        v-for="event of 7"
        :id="'event-' + event"
        :key="event"
        cols="12"
        sm="10"
        md="9"
      >
        <v-card>
          <v-card-title class="headline">
            {{ generateDate(event - 1) }}
          </v-card-title>
          <v-card-text>
            <v-simple-table v-if="!loading">
              <template #default>
                <tbody>
                  <tr>
                    <th>1日中</th>
                    <td class="event-list">
                      <ul>
                        <li v-for="s in events[event - 1][0]" :key="s">
                          {{ s }}
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr v-for="i in 24" :key="i">
                    <th>{{ i - 1 }}:00～</th>
                    <td class="event-list">
                      <ul>
                        <li v-for="s in events[event - 1][i]" :key="s">
                          {{ s }}
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-skeleton-loader v-else class="mx-auto" type="list-item-three-line" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.loading = true
      try {
        const results = await this.$axios.$get(
          'https://battlecats-db.vercel.app/api/event-list'
        )

        this.events = results
      } catch (e) {
        alert(`エラーが発生しました。\n${e}`)
      }
      this.loading = false
    },
    generateDate(d) {
      const date = new Date(Date.now() + 1000 * 60 * 60 * 24 * d)

      return `${date.toLocaleDateString()} (${
        ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]
      })`
    },
  },
}
</script>
