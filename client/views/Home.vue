<template>
  <div class="page">
    <counter></counter>
  </div>
</template>

<script>
import $ from 'jquery'
import Counter from 'components/Counter'

export default {
  components: {
    Counter
  },
  async mounted() {
    try {
      const counts = await this.$api.getCount()
      console.log(counts.data)
      $.ajax('http://127.0.0.1:7001/api/v1/jsonp', {
        dataType: 'jsonp',
        data: {
          username: 'dd',
          password: '888888'
        }
      }).then(console.log)
    } catch (e) {
      console.error(e)
    }
  }
}

</script>
