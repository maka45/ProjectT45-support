<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Т45 детейлинг центр
        </q-toolbar-title>

        <div> v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header >
          Личный кабинет клиента main-todey
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Каталог',
    caption: 'Каталого товаров и услуг',
    icon: 'las la-car',
    link: 'catalog'
  },
  {
    title: 'История ',
    caption: 'История обслуживания',
    icon: 'las la-history',
    link: 'history'
  },
  {
    title: 'Заказы в работе',
    caption: 'Текущие заказы в работе',
    icon: 'las la-cloud-sun-rain',
    link: 'orders'
  },
  {
    title: 'Гараж',
    caption: 'Мой транспорт',
    icon: 'las la-warehouse',
    link: 'auto'
  },
  {
    title: 'Профиль',
    caption: 'Мой профиль',
    icon: 'las la-user-cog',
    link: 'profile'
  }

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
