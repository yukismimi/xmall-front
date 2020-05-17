<template>
  <div class="pay" v-loading="loading">
  </div>
</template>

<script>
  import { pay } from '/api/goods'

  export default {
    data () {
      return {
        apply: '',
        loading: true
      }
    },
    created () {
      console.log('alipay created')
      let params = {
        orderId: this.$route.query.orderId
      }
      console.log(params)
      pay(params).then(res => {
        console.log('alipay return')
        if (res.data.isSuccess) {
          document.write(res.data.html)
        } else {
          this.loading = false
        }
      }).catch((error) => {
        console.log(error)
        this.loading = false
      })
    }
  }
</script>

<style scoped>
  .pay{
    width: 100%;
    height: 100%;
  }
</style>
