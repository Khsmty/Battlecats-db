<template>
  <v-img
    :src="
      'https://battlecats-img.pages.dev/unit/uni' +
      noToString(no) +
      '_' +
      (no.slice(-1) === '1' ? 'f' : no.slice(-1) === '2' ? 'c' : 's') +
      '00.png'
    "
    max-height="50"
    max-width="70"
  />
</template>

<script>
export default {
  props: {
    no: {
      type: String,
      required: true,
    },
  },
  methods: {
    noToString(no) {
      let result = String(Number(no.slice(0, 3)) - 1)

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
