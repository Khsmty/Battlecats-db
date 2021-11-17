<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="page-title">ホーム</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="9">
        <v-card>
          <v-card-title class="headline">今後のイベント</v-card-title>
          <v-card-text>
            <v-simple-table v-if="!loading">
              <template #default>
                <tbody>
                  <tr>
                    <th>1日中</th>
                    <td class="event-list">
                      <ul>
                        <li v-for="s in upcomingEvents[0]" :key="s">
                          {{ s }}
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr v-for="i in 3" :key="i">
                    <th>{{ generateHour(i) }}:00～</th>
                    <td class="event-list">
                      <ul>
                        <li v-for="s in upcomingEvents[i]" :key="s">
                          {{ s }}
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-skeleton-loader v-else type="table-tbody" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" elevation="0" to="/event" nuxt>
              イベント一覧
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upcomingEvents: [],
      loading: true,
      nowHour: new Date().getHours(),
    }
  },
  head() {
    return {
      title: 'ホーム',
    }
  },
  mounted() {
    this.getUpcomingEvents()
  },
  methods: {
    async getUpcomingEvents() {
      this.loading = true
      const data = await this.$axios.$get(
        '/api/upcoming-event'
      )

      this.upcomingEvents = data
      this.loading = false
    },
    generateHour(hour) {
      return this.nowHour + hour - 1 < 24
        ? this.nowHour + hour - 1
        : this.nowHour + hour - 1 - 24
    },
  },
}
</script>
