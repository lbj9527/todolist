<template>
  <div>
    <nav-header @add='add'></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>

</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue'
import NavMain from '@/components/navMain/NavMain.vue'
import NavFooter from '@/components/navFooter/NavFooter.vue'
import {defineComponent, ref, computed} from 'vue'
import { useStore } from 'vuex'

export default defineComponent ({
  name: 'HomeView',
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup() {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')
    //添加任务
    let add = (val) => {
      console.log(val)
      value.value = val
      //先判断有没有存在的任务 如果任务存在 不能重复添加
      let flag = true
      list.value.map(item => {
        if (item.title === value.value) {
          //有重复的任务
          flag = false
          alert('任务存在')
        }
      }) 
      //调用mutation的方法
      if(flag) {
        store.commit('addTodo', {
        title: value.value,
        complete: 'false'
      })
      flag = true
      }
    }
    //删除任务
    let del = (val) => {
      store.commit('delTodo',val)
    }
    //删除已完成的
    let clear = (val) => {
      store.commit('clear', val)

    }
    return {
      add,
      value,
      list,
      del,
      clear
    }
    
  }

  })
</script>

<style scoped lang="scss">

</style>
