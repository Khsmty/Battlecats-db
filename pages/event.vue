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
      <h1 class="page-title">イベントカレンダー</h1>
    </v-col>
    <v-col cols="12" sm="10" md="9">
      <v-card>
        <v-card-title class="headline">
          {{ new Date().toLocaleDateString() }}
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template #default>
              <tbody>
                <tr v-for="i in 24" :key="i">
                  <th>{{ i - 1 }}:00～</th>
                  <td style="white-space: pre">{{ events[i - 1] }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
      events: [],
    }
  },
  head() {
    return {
      title: 'イベントカレンダー',
    }
  },
  async mounted() {
    try {
      const response = await Axios.get(`http://localhost:8080/eventlist?date=1`)
      const results = response.data

      this.events = results
    } catch (e) {
      alert(`エラーが発生しました。\n${e}`)
    }
    this.loading = false
  },
}
</script>
