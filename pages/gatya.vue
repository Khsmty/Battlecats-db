<template>
  <p>Hello World!</p>
</template>

<script>
import Axios from 'axios'

export default {
  data() {
    return {
      message: 'ガチャスケジュール',
    }
  },
  mounted() {
    this.getGatya()
  },
  methods: {
    async getGatya() {
      const response = await Axios.get('https://battlecats-api.f5.si/eventlist')
      const events = response.data

      alert(events)
    },
  },
}
</script>
