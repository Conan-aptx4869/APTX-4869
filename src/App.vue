<template>
  <div class="box">
    <headers></headers>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import headers from './components/header/headers.vue';
  export default {
    data: function () {
      return {
        seller: {}
      };
    },
    components: {
      headers
    },
    created: function () {
      this.$http.get('/static/data/data.json').then((res) => {
        console.log(res);
      });
    }
  };

</script>

<style scoped>
  .tab {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #C2C2C2;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab-item a {
    display: block;
    color: #333;
    font-size: 14px;
  }

  .tab-item a.active {
    color: red;
  }
</style>
