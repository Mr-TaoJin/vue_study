<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div> -->
  <div class="echarts">
    <img src="@/assets/echarts.png" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// let echarts = require('echarts/lib/echarts');

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.echarts{
  img{
    width: 100%;
  }
}
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
