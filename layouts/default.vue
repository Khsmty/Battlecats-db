<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <v-list nav>
          <v-list-item
            v-for="(bItem, i) in bottomItems"
            :key="i"
            :to="bItem.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ bItem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="bItem.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar elevate-on-scroll fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"
        >にゃんこ大戦争db</v-toolbar-title
      >
      <v-spacer />
      <SettingMenu />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'ホーム',
          to: '/',
        },
        {
          icon: 'mdi-book',
          title: '味方キャラクター',
          to: '/unit',
        },
      ],
      bottomItems: [
        {
          icon: 'mdi-information',
          title: 'このサイトについて',
          to: '/about',
        },
      ],
    }
  },
}
</script>
