<template>
  <v-img
    :src="
      'https://battlecats-data.vercel.app/img/unit/uni' +
      idToString(id) +
      '_' +
      (id.slice(-1) === '1' ? 'f' : id.slice(-1) === '2' ? 'c' : 's') +
      '00.png'
    "
    max-height="50"
    max-width="70"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    idToString(id) {
      let result = String(Number(id.slice(0, 3)) - 1)

      if (result.length === 1) {
        result = '00' + result
      } else if (result.length === 2) {
        result = '0' + result
      }

      return result
    },
  },
}
</script>
