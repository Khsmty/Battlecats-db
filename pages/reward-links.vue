<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">報酬リンク集</h1>
    </v-col>
    <v-col v-for="item of items" :key="item.name" cols="12" sm="10" md="9">
      <v-card :href="'ponos-battlecats4://ponos/' + item.link">
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-text>取得: {{ item.drop }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'アンケート特典 1',
          link: 'enquete/1/r89kqiua',
          drop: 'ネコカン 50個',
        },
        {
          name: 'アンケート特典 2',
          link: 'enquete/3/qgh1f1ow',
          drop: 'ネコカン 50個',
        },
        {
          name: 'アンケート特典 3',
          link: 'enquete/4/m7fsiqg4',
          drop: 'ネコカン 50個',
        },
        {
          name: 'アンケート特典 4',
          link: 'enquete/5/m7fsiqg4',
          drop: 'ネコカン 50個',
        },
        {
          name: 'アンケート特典 5',
          link: 'enquete/6/g8pm7whi',
          drop: 'ネコカン 50個',
        },
        {
          name: 'アンケート特典 6',
          link: 'enquete/7/f5eiwyq7',
          drop: 'ネコカン 50個',
        },
        {
          name: 'にゃんこTV記念 1',
          link: 'nyankoTV/1/x673shf4',
          drop: 'レアチケット 5枚',
        },
        {
          name: 'にゃんこTV記念 2',
          link: 'nyankoTV/2/u9g3pzxe',
          drop: 'ネコ少年',
        },
        {
          name: 'クラッシュフィーバー 1',
          link: 'crashfever1-jp',
          drop: 'ハッピー100',
        },
        {
          name: 'クラッシュフィーバー 2',
          link: 'crashfever2-jp',
          drop: 'XP 30000',
        },
        {
          name: 'クラッシュフィーバー 3',
          link: 'crashfever3-jp',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: '消滅都市 1',
          link: 'shoumetsu1',
          drop: 'ゆきにゃん + レアチケット 1枚 + ネコカン 30個',
        },
        {
          name: '消滅都市 2',
          link: 'shoumetsu2',
          drop: 'XP 30000 + ネコカン 50個',
        },
        {
          name: '消滅都市 3',
          link: 'shoumetsu3',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: '消滅都市 4',
          link: 'shoumetsu4_1',
          drop: 'ゆきにゃん + レアチケット 1枚 + ネコカン 30個',
        },
        {
          name: '消滅都市 5',
          link: 'shoumetsu4_2',
          drop: 'XP 30000 + ネコカン 50個',
        },
        {
          name: '消滅都市 6',
          link: 'shoumetsu4_3',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: '消滅都市 7',
          link: 'shoumetsu4_4',
          drop: 'ネコカン 50個 + トレジャーレーダー 1個',
        },
        {
          name: '消滅都市 8',
          link: 'shoumetsu5_1',
          drop: 'ゆきにゃん + レアチケット 1枚 + ネコカン 30個',
        },
        {
          name: '消滅都市 9',
          link: 'shoumetsu5_2',
          drop: 'XP 30000 + ネコカン 50個',
        },
        {
          name: '消滅都市 10',
          link: 'shoumetsu5_3',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: '消滅都市 11',
          link: 'shoumetsu5_4',
          drop: 'ネコカン 50個 + トレジャーレーダー 1個',
        },
        {
          name: '消滅都市 12',
          link: 'shoumetsu6_1',
          drop: 'ゆきにゃん + レアチケット 1枚 + ネコカン 30個',
        },
        {
          name: '消滅都市 13',
          link: 'shoumetsu6_2',
          drop: 'XP 30000 + ネコカン 50個',
        },
        {
          name: '消滅都市 14',
          link: 'shoumetsu6_3',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: '消滅都市 15',
          link: 'shoumetsu6_4',
          drop: 'ネコカン 50個 + トレジャーレーダー 1個',
        },
        { name: 'メルクストーリア 1', link: 'merc1', drop: 'ティティ' },
        {
          name: 'メルクストーリア 2',
          link: 'merc2',
          drop: 'にゃんこチケット 3枚',
        },
        { name: 'メルクストーリア 3', link: 'merc3', drop: 'レアチケット 1枚' },
        {
          name: 'メルクストーリア 4',
          link: 'merc4_1',
          drop: 'ティティ + レアチケット 1枚',
        },
        {
          name: 'メルクストーリア 5',
          link: 'merc4_2',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: 'メルクストーリア 6',
          link: 'merc4_3',
          drop: 'レアチケット 1枚',
        },
        {
          name: 'メルクストーリア 7',
          link: 'merc5_1',
          drop: 'ティティ + レアチケット 1枚',
        },
        {
          name: 'メルクストーリア 8',
          link: 'merc5_2',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: 'メルクストーリア 9',
          link: 'merc5_3',
          drop: 'レアチケット 1枚',
        },
        {
          name: 'メルクストーリア 10',
          link: 'merc6_1',
          drop: 'ティティ + レアチケット 1枚',
        },
        {
          name: 'メルクストーリア 11',
          link: 'merc6_2',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: 'メルクストーリア 12',
          link: 'merc6_3',
          drop: 'レアチケット 1枚',
        },
        {
          name: 'メルクストーリア 13',
          link: 'merc7_1',
          drop: 'ティティ + レアチケット 1枚',
        },
        {
          name: 'メルクストーリア 14',
          link: 'merc7_2',
          drop: 'にゃんこチケット 3枚',
        },
        {
          name: 'メルクストーリア 15',
          link: 'merc7_3',
          drop: 'レアチケット 1枚',
        },
        {
          name: 'ひよこ小競走 1',
          link: 'hiyokorace1',
          drop: 'レアチケット 1枚',
        },
        { name: 'ひよこ小競走 2', link: 'hiyokorace2', drop: 'ネコカン 100個' },
        {
          name: 'ひよこ小競走 3',
          link: 'hiyokorace3',
          drop: 'にゃんこチケット 1枚',
        },
        {
          name: '京刀のナユタ 1',
          link: 'kyotononayuta1',
          drop: 'にゃんこチケット 1枚',
        },
        {
          name: '京刀のナユタ 2',
          link: 'kyotononayuta2',
          drop: 'レアチケット 1枚',
        },
        {
          name: '京刀のナユタ 3',
          link: 'kyotononayuta3',
          drop: 'ネコカン 100個',
        },
        {
          name: '城ドラ 1',
          link: 'shirodora1',
          drop: 'ゴーレム + レアチケット 1枚',
        },
        {
          name: '城ドラ 2',
          link: 'shirodora2',
          drop: 'ゴーレム + レアチケット 1枚',
        },
        {
          name: '城ドラ 3',
          link: 'shirodora3',
          drop: 'ゴーレム + レアチケット 1枚',
        },
        {
          name: 'ねこホッピング 1',
          link: 'nekohopper_1',
          drop: 'ネコカン 30個',
        },
        {
          name: 'ねこホッピング 2',
          link: 'nekohopper_2',
          drop: 'おかめはちもく 3個',
        },
        {
          name: 'ねこホッピング 3',
          link: 'nekohopper_3',
          drop: 'ネコボン 3個',
        },
        {
          name: 'ねこホッピング 4',
          link: 'nekohopper_4',
          drop: 'トレジャーレーダー 3個',
        },
        {
          name: 'ねこホッピング 5',
          link: 'nekohopper_5',
          drop: 'レアチケット 3枚',
        },
        { name: 'ゆるゲゲ 1', link: 'yurugegege1', drop: 'ネコカン 30個' },
        { name: 'ゆるゲゲ 2', link: 'yurugegege2', drop: '目玉おやじ' },
        { name: 'ゆるゲゲ 3', link: 'yurugegege2_1', drop: 'ネコカン 30個' },
        {
          name: 'ゆるゲゲ 4',
          link: 'yurugegege2_2',
          drop: '目玉おやじ + レアチケット 1枚',
        },
        { name: 'ゆるゲゲ 5', link: 'yurugegege3_1', drop: 'ネコカン 30個' },
        {
          name: 'ゆるゲゲ 6',
          link: 'yurugegege3_2',
          drop: '目玉おやじ + レアチケット 1枚',
        },
        {
          name: 'にゃんこ新日本',
          link: 'newjapan_1',
          drop: 'レアチケット 3枚',
        },
        {
          name: 'にゃんこクエスト 1',
          link: 'nyanko9_jp1',
          drop: 'ネコカン 50個',
        },
        {
          name: 'にゃんこクエスト 2',
          link: 'nyanko9_jp2',
          drop: 'ネコボン 3個',
        },
        {
          name: 'にゃんこクエスト 3',
          link: 'nyanko9_jp3',
          drop: 'ネコカン 100個',
        },
        {
          name: 'にゃんこクエスト 4',
          link: 'nyanko9_jp4',
          drop: 'トレジャーレーダー 3個',
        },
        {
          name: 'にゃんこクエスト 5',
          link: 'nyanko9_jp5',
          drop: 'レアチケット 3枚',
        },
        { name: 'にゃんこ大泥棒', link: 'odorobo1', drop: 'おやじネコ(店主)' },
        {
          name: 'ファイトクラブ 1',
          link: 'fightclub1',
          drop: 'レアチケット 1枚',
        },
        {
          name: 'ファイトクラブ 2',
          link: 'fightclub2',
          drop: 'ネコカン 100個',
        },
        {
          name: 'ファイトクラブ 3',
          link: 'fightclub3',
          drop: 'にゃんこチケット 1枚',
        },
        { name: 'ハニートーストカフェ', link: 'pasela1', drop: 'ハニトンくん' },
        { name: 'キャットバスターズ', link: 'blakb4cs', drop: 'ネコ博士' },
        { name: '? 1', link: 'fbq9bcp9', drop: 'ネコカン 50個' },
        { name: '? 2', link: 'hld7058h', drop: 'レアチケット 1枚' },
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
