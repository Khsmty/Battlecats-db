<template>
  <v-row justify="center">
    <v-col cols="12">
      <h1 class="page-title">
        このサイトについて
      </h1>
    </v-col>
    <v-col cols="12" sm="10" md="9">
      <v-card>
        <v-card-title class="headline">
          著作権について
        </v-card-title>
        <v-card-text>
          当サイトに掲載されている画像の著作権やその他の知的財産権は、PONOS株式会社に帰属します。<br>
          当サイトはPONOS株式会社とは一切関係のない、非公式サイトです。
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'このサイトについて'
    }
  }
}
</script>
