<template>
    <!-- 开始页 -->
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted} from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent ({
  name: 'Start',
  setup() { //组件创建的过程
    let router = useRouter()
    let name = ref('jack')
    let num = ref(10) 
    let obj = ref({
      msg: "start"
    })
    onMounted(() => {
      //组件挂载的过程
      //数据DOM...
      //与后台交互 发请求
      //数据初始化操作 接收路由的参数
    })
    onUnmounted(() => {
      //组件卸载时的生命周期
      //清除定时器 清除闭包函数
      console.log("unload conponnent")
    })
    let start = () => {
      //push 如果是传的对象的形式 就可以传递参数
      //query传参
      //push里面还可以传入name name是路由的名字
      //query传参path和name都可以
      //params传参只能用name
      //query传参可以在地址栏显示,params传参不能在地址栏显示
      router.push({
        //path: '/home',
        name: 'Home',
        query: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj.value)
        }
        // params: {
        //   name: name.value,
        //   num: num.value,
        //   obj: JSON.stringify(obj)
        // }
      })
    }
    return {
      start,
      name,
      num,
      obj
    }
  }
})
</script>