<template>
  <v-dialog v-model="customizeMenu" max-width="500">
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        v-bind="attrs"
        fixed
        right
        bottom
        large
        rounded
        v-on="on"
      >
        <v-icon>mdi-wrench</v-icon>&nbsp;カスタマイズ
      </v-btn>
    </template>

    <v-card>
      <v-card-title>カスタマイズ</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="charaLv"
              outlined
              dense
              hide-details="auto"
              label="レベル"
              prefix="Lv."
              @change="changeSettings()"
            />
          </v-col>
          <v-col cols="12">
            <v-switch
              v-model="instinct"
              label="本能"
              hide-details="auto"
              @change="changeSettings()"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="instinctAtk"
              outlined
              dense
              hide-details="auto"
              label="本能(攻撃力)"
              prefix="Lv."
              @change="changeSettings()"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="instinctHp"
              outlined
              dense
              hide-details="auto"
              label="本能(体力)"
              prefix="Lv."
              @change="changeSettings()"
            />
          </v-col>
          <v-col v-if="!list" cols="12">
            <v-row>
              <v-col cols="12">
                <hr />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="filterByMyUnit"
                  :items="filterByMyUnitOpt"
                  outlined
                  dense
                  label="所持状況で絞り込み"
                  @change="changeSettings()"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="andOr"
                  :items="andOrOpt"
                  outlined
                  dense
                  hide-details="auto"
                  label="AND/OR"
                  @change="changeSettings()"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="filterByEnemyColor"
                  :items="filterByEnemyColorOpt"
                  outlined
                  dense
                  multiple
                  hide-details="auto"
                  label="敵色で絞り込み"
                  @change="changeSettings()"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" text @click="customizeMenu = false">
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    list: {
      type: Boolean,
      default: false,
    },
    charalv: {
      type: String,
      required: true,
    },
    instincttoggle: {
      type: Boolean,
      required: true,
    },
    instinctatk: {
      type: String,
      required: true,
    },
    instincthp: {
      type: String,
      required: true,
    },
    filterbymyunit: {
      type: String,
      default: '',
    },
    andor: {
      type: String,
      default: 'o',
    },
    filterbyenemycolor: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      customizeMenu: false,
      charaLv: this.charalv,
      instinct: this.instincttoggle,
      instinctAtk: this.instinctatk,
      instinctHp: this.instincthp,
      filterByMyUnit: this.filterbymyunit,
      filterByMyUnitOpt: [
        { text: 'しない', value: 'a' },
        { text: '所持キャラのみ', value: 'y' },
        { text: '未所持キャラのみ', value: 'n' },
      ],
      andOr: this.andor,
      andOrOpt: [
        { text: 'AND 検索', value: 'a' },
        { text: 'OR 検索', value: 'o' },
      ],
      filterByEnemyColor: this.filterbyenemycolor,
      filterByEnemyColorOpt: [
        { text: '白い敵', value: '白' },
        { text: '赤い敵', value: '赤' },
        { text: '浮いてる敵', value: '浮' },
        { text: '黒い敵', value: '黒' },
        { text: 'メタルな敵', value: 'メタル' },
        { text: '天使', value: '天使' },
        { text: 'エイリアン', value: 'エイリアン' },
        { text: 'ゾンビ', value: 'ゾンビ' },
        { text: '古代', value: '古代' },
        { text: '悪魔', value: '悪魔' },
      ],
    }
  },
  mounted() {
    this.charaLv = localStorage.getItem('charaLv') || '30'
    this.instinct = localStorage.getItem('instinct') === 'true'
    this.instinctAtk = localStorage.getItem('instinctAtk') || '0'
    this.instinctHp = localStorage.getItem('instinctHp') || '0'
  },
  methods: {
    changeSettings() {
      localStorage.setItem('charaLv', this.charaLv)
      localStorage.setItem('instinct', this.instinct)
      localStorage.setItem('instinctAtk', this.instinctAtk)
      localStorage.setItem('instinctHp', this.instinctHp)

      this.$emit('changeSettings', {
        charaLv: this.charaLv,
        instinct: this.instinct,
        instinctAtk: this.instinctAtk,
        instinctHp: this.instinctHp,
        filterByMyUnit: this.filterByMyUnit,
        andOr: this.andOr,
        filterByEnemyColor: this.filterByEnemyColor,
      })
    },
  },
}
</script>
