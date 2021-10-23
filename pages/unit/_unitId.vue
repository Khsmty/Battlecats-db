<template>
  <v-row justify="center" align="center">
    <v-col v-for="result of results" :key="result[1]" cols="12" sm="10" md="9">
      <v-card>
        <v-card-title class="headline">
          {{ result[2] }}
        </v-card-title>
        <v-card-text>
          <v-simple-table dense>
            <template #default>
              <tbody>
                <tr>
                  <th>体力</th>
                  <td>{{ result[6] }}</td>
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
export default {
  async asyncData({ $axios, params }) {
    const users = await $axios.$get(
      'https://script.google.com/macros/s/AKfycbxZeitsl4FpuENG7VWcv-av6owR2NM6AONqfziHFZcTjAqcVTPs7isPjmZzBdhu8iY/exec',
      {
        params: {
          id: params.unitId,
        },
      }
    )
    const results = users.results
    return { results }
  },
}
</script>
