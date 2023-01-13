<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import { defineComponent, DefineComponent } from 'vue'
export default defineComponent ({
  name: 'HomeView',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {

  }

  })
</script>

<style scoped lang="scss">

</style>
