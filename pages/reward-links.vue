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
        { name: 'アンケート特典 3', link: 'enquete/4/m7fsiqg4' },
        { name: 'アンケート特典 4', link: 'enquete/5/m7fsiqg4' },
        { name: 'アンケート特典 5', link: 'enquete/6/g8pm7whi' },
        { name: 'アンケート特典 6', link: 'enquete/7/f5eiwyq7' },
        { name: 'にゃんこTV記念 1', link: 'nyankoTV/1/x673shf4' },
        { name: 'にゃんこTV記念 2', link: 'nyankoTV/2/u9g3pzxe' },
        { name: 'クラッシュフィーバー 1', link: 'crashfever1-jp' },
        { name: 'クラッシュフィーバー 2', link: 'crashfever2-jp' },
        { name: 'クラッシュフィーバー 3', link: 'crashfever3-jp' },
        { name: '消滅都市 1', link: 'shoumetsu1' },
        { name: '消滅都市 2', link: 'shoumetsu2' },
        { name: '消滅都市 3', link: 'shoumetsu3' },
        { name: '消滅都市 4', link: 'shoumetsu4_1' },
        { name: '消滅都市 5', link: 'shoumetsu4_2' },
        { name: '消滅都市 6', link: 'shoumetsu4_3' },
        { name: '消滅都市 7', link: 'shoumetsu4_4' },
        { name: '消滅都市 8', link: 'shoumetsu5_1' },
        { name: '消滅都市 9', link: 'shoumetsu5_2' },
        { name: '消滅都市 10', link: 'shoumetsu5_3' },
        { name: '消滅都市 11', link: 'shoumetsu5_4' },
        { name: '消滅都市 12', link: 'shoumetsu6_1' },
        { name: '消滅都市 13', link: 'shoumetsu6_2' },
        { name: '消滅都市 14', link: 'shoumetsu6_3' },
        { name: '消滅都市 15', link: 'shoumetsu6_4' },
        { name: 'メルクストーリア 1', link: 'merc1' },
        { name: 'メルクストーリア 2', link: 'merc2' },
        { name: 'メルクストーリア 3', link: 'merc3' },
        { name: 'メルクストーリア 4', link: 'merc4_1' },
        { name: 'メルクストーリア 5', link: 'merc4_2' },
        { name: 'メルクストーリア 6', link: 'merc4_3' },
        { name: 'メルクストーリア 7', link: 'merc5_1' },
        { name: 'メルクストーリア 8', link: 'merc5_2' },
        { name: 'メルクストーリア 9', link: 'merc5_3' },
        { name: 'メルクストーリア 10', link: 'merc6_1' },
        { name: 'メルクストーリア 11', link: 'merc6_2' },
        { name: 'メルクストーリア 12', link: 'merc6_3' },
        { name: 'メルクストーリア 13', link: 'merc7_1' },
        { name: 'メルクストーリア 14', link: 'merc7_2' },
        { name: 'メルクストーリア 15', link: 'merc7_3' },
        { name: 'ひよこ小競走 1', link: 'hiyokorace1' },
        { name: 'ひよこ小競走 2', link: 'hiyokorace2' },
        { name: 'ひよこ小競走 3', link: 'hiyokorace3' },
        { name: '京刀のナユタ 1', link: 'kyotononayuta1' },
        { name: '京刀のナユタ 2', link: 'kyotononayuta2' },
        { name: '京刀のナユタ 3', link: 'kyotononayuta3' },
        { name: '城ドラ 1', link: 'shirodora1' },
        { name: '城ドラ 2', link: 'shirodora2' },
        { name: '城ドラ 3', link: 'shirodora3' },
        { name: 'ねこホッピング 1', link: 'nekohopper_1' },
        { name: 'ねこホッピング 2', link: 'nekohopper_2' },
        { name: 'ねこホッピング 3', link: 'nekohopper_3' },
        { name: 'ねこホッピング 4', link: 'nekohopper_4' },
        { name: 'ねこホッピング 5', link: 'nekohopper_5' },
        { name: 'ゆるゲゲ 1', link: 'yurugegege1' },
        { name: 'ゆるゲゲ 2', link: 'yurugegege2' },
        { name: 'ゆるゲゲ 3', link: 'yurugegege2_1' },
        { name: 'ゆるゲゲ 4', link: 'yurugegege2_2' },
        { name: 'ゆるゲゲ 5', link: 'yurugegege3_1' },
        { name: 'ゆるゲゲ 6', link: 'yurugegege3_2' },
        { name: 'にゃんこ新日本', link: 'newjapan_1' },
        { name: 'にゃんこクエスト 1', link: 'nyanko9_jp1' },
        { name: 'にゃんこクエスト 2', link: 'nyanko9_jp2' },
        { name: 'にゃんこクエスト 3', link: 'nyanko9_jp3' },
        { name: 'にゃんこクエスト 4', link: 'nyanko9_jp4' },
        { name: 'にゃんこクエスト 5', link: 'nyanko9_jp5' },
        { name: '? 1', link: 'fbq9bcp9' },
        { name: '? 2', link: 'hld7058h' },
        { name: '? 3', link: 'blakb4cs' },
        { name: '? 4', link: 'pasela1' },
        { name: '? 5', link: 'fightclub1' },
        { name: '? 6', link: 'fightclub2' },
        { name: '? 7', link: 'fightclub3' },
        { name: '? 8', link: 'odorobo1' },
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
