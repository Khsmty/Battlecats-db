<template>
  <v-dialog v-model="dialog" max-width="500" scrollable>
    <template #activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" depressed v-on="on">
        <v-icon>mdi-sort-variant</v-icon>&nbsp;詳細検索
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="font-weight-bold headline pb-10">
        詳細検索
      </v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col cols="12">
            <v-btn-toggle
              v-model="andOr"
              color="primary"
              dense
              mandatory
              @change="changeSettings()"
            >
              <v-btn value="o">OR検索</v-btn>
              <v-btn value="a">AND検索</v-btn>
            </v-btn-toggle>
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
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" depressed @click="dialog = false">
          閉じる
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
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
      dialog: false,
      andOr: this.andor,
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
  methods: {
    changeSettings() {
      this.$emit('changeSettings', {
        andOr: this.andOr,
        filterByEnemyColor: this.filterByEnemyColor,
      })
    },
  },
}
</script>
