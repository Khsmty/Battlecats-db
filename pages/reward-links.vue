<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">報酬リンク集</h1>
    </v-col>
    <v-col v-for="item of items" :key="item.name" cols="12" sm="10" md="9">
      <v-card :href="'ponos-battlecats4://ponos/' + item.link">
        <v-card-title>{{ item.name }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'アンケート特典 1', link: 'enquete/1/r89kqiua' },
        { name: 'アンケート特典 2', link: 'enquete/3/qgh1f1ow' },
        { name: 'アンケート特典 3', link: 'enquete/4/m7folog1' },
        { name: 'アンケート特典 4', link: 'enquete/5/m7fsiqg4' },
        { name: 'アンケート特典 5', link: 'enquete/6/g8pm7whi' },
        { name: 'アンケート特典 6', link: 'enquete/7/f5eiwyq7' },
        { name: 'にゃんこTV記念 1', link: 'nyankoTV/1/x673shf4' },
        { name: 'にゃんこTV記念 2', link: 'nyankoTV/1/u9g3pzxe' },
      ],
    }
  },
  head() {
    return {
      title: '報酬リンク集',
    }
  },
}
</script>
