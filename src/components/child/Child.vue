<template>
    <div>
        <h1>这是child组件</h1>
        父组件传递过来的数据：{{ msg }}<br>
        <button @click="send">传值给父组件</button>
    </div>
    <!-- 
        父子组件传递数据
        1.父组件->子组件：通过动态属性绑定的方式，子组件通过props接收
        2.子组件->父组件：通过ctx.emit分发事件的方式
     -->
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent ({
    name: "Child",
    //接收父组件传递的参数
    props: {
        msg: {
            //数据类型校验
            type: String,
            //是否必传 默认是false
            //required: true,
            //设置默认值
            //default: '默认值'
        }
    },
    setup(props, ctx) {
        console.log(props.msg)
        let childMsg = ref('我是子组件的数据')
        let childNum = ref(10)
        let send = () => {
            //而是通过ctx.emit分发事件
            //emit第一个参数是事件名称 第二个参数是传递的数据
            ctx.emit('send', childMsg.value)
        }
        onMounted (() => {
            // ctx.emit('send', [childMsg.value,childNum.value])
            ctx.emit('send', {
                msg: childMsg.value,
                num: childNum.value
            })
        })
        return {
            childMsg,
            send
        }
        
    }
})

</script>