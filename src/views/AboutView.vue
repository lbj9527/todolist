<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <button @click="gohome">回到首页</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent ({
  name: 'About',
  setup() {
    let router = useRouter()
    let gohome = () => {
      router.push('/')
    }
    return {
      gohome
    }
  }
})
</script>
