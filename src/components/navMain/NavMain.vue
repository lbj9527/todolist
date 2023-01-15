<template>
    <div>
        <div v-if="list.length > 0">
            <div v-for="(item, index) in list" :key="index">
                <div class="item">
                    <input type="checkbox" v-model="item.complete">
                    {{ item.title }}
                    <button class="del" @click="del(item, index)">删除</button>
                </div>
            </div>
        </div>
        <div v-else>
            暂无任务
        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
export default defineComponent ({
    name: "NavMain",
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    emits: ['del'],    //emits数组用来放分发事件的属性名字
    setup(props, ctx) {
        //删除任务
        let del = (item, index) => {
            // console.log(item)
            // console.log(index)
            ctx.emit('del',index)
        }
        return {
            del
        }
    }
})
</script>

<style scoped lang="scss">
.item {
    height:35px;
    line-height: 35px;
    position: relative;
    width:192px;
    cursor: pointer;
    button {
        position: absolute;
        right: 20px;
        top: 8px;
        display: none;
        z-index: 99;
    }
    &:hover {  //&表示当前类名，即item
        background: #ddd;
        button {
            display: block;   
        }
    }
}
</style>