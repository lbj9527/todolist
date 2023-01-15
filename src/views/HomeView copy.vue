<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
    <!-- <div>
      {{ list }}
    </div> -->
  </div>
  <div>
    <button @click="goto">跳转路由</button>
    {{ num }}---{{ name }}---{{ obj }}
  </div>

</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import { computed, defineComponent,ref, onMounted} from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute} from 'vue-router'

export default defineComponent ({
  name: 'HomeView',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    //全局路由对象
    let router = useRouter()
    //当前路由对象
    let route = useRoute()
    //query传递的参数都是字符串的类型
    //console.log(route.query)
    let num = ref(null)
    let name = ref('')
    let obj = ref({})
    onMounted(() => {
      num.value = route.query.num * 1
      name.value = route.query.name
      obj.value = route.query.obj
    })
    let goto = () => {
      //跳转路由
      //push函数里面可以传入跳转的路径
      //back: 回退到上一页
      //forward: 去到下一页
      //go(整数) 整数代表前进 负数代表后退
      router.push('/about')
    }
    // let store = useStore()
    // let list = computed( () => {
    //   return store.state.list
    // })
    return {
      // list
      goto,
      num,
      name,
      obj
    }
  }

  })
</script>

<style scoped lang="scss">

</style>
