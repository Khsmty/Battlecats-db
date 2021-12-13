<template>
  <v-dialog v-model="dialog" max-width="500" scrollable>
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
      <v-card-title class="font-weight-bold headline pb-10">
        カスタマイズ
      </v-card-title>
      <v-card-subtitle>
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
              style="margin-top: 0px; padding-top: 0px"
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
  },
  data() {
    return {
      dialog: false,
      charaLv: this.charalv,
      instinct: this.instincttoggle,
      instinctAtk: this.instinctatk,
      instinctHp: this.instincthp,
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
      })
    },
  },
}
</script>
