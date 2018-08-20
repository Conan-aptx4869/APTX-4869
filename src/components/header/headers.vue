<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.support != false" class="support-count" @click="showDetail">
        <span class="count">个</span>
        <i>></i>
      </div>
    </div>

    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
    </div>
    <div class="backGround">
      <img :src="seller.avatar" alt="" width="100%" height="100%"/>
    </div>

    <div class="detail" v-show="detailShow">
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <star :size="48" :score="seller.score"></star>
        </div>
      </div>
      <div class="detail-close">
        <i class="close" @click="closed">×</i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import star from '../star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail () {
        this.detailShow = true;
      },
      closed () {
        this.detailShow = false;
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      console.log(this.seller);
    },
    components: {star}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    color: #fff;
    position: relative;
    overflow: hidden;
    background: rgba(7, 17, 27, 0.5);
  }

  .header .content-wrapper {
    padding: 24px 12px 18px 24px;
    font-size: 0;
    position: relative;
  }

  .header .content-wrapper .avatar {
    display: inline-block;
    vertical-align: top;
    margin-right: 16px;

  }

  .header .content-wrapper .avatar > img {
    border-radius: 2px;
  }

  .header .content-wrapper .content {
    display: inline-block;
    font-size: 16px;
  }

  .content-wrapper .content .title {
    margin: 2px 0 8px 0;
  }

  .content-wrapper .content .title .brand {
    width: 30px;
    height: 18px;
    display: inline-block;
    vertical-align: top;
    background: url("/static/imgs/brand@2x.png") no-repeat center center;
    background-size: contain;
  }

  .content-wrapper .content .title .name {
    vertical-align: top;
    font-size: 16px;
    font-weight: bold;
  }

  .content-wrapper .content .description {
    margin-bottom: 10px;
    font-size: 12px;
  }

  .content-wrapper .content .support .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    vertical-align: middle;
  }

  .content-wrapper .icon.decrease {
    background-image: url("/static/imgs/decrease_1@2x.png");
  }

  .content-wrapper .icon.discount {
    background-image: url("/static/imgs/discount_1@2x.png");
  }

  .content-wrapper .icon.guarantee {
    background-image: url("/static/imgs/guarantee_1@2x.png");
  }

  .content-wrapper .icon.invoice {
    background-image: url("/static/imgs/invoice_1@2x.png");
  }

  .content-wrapper .icon.special {
    background-image: url("/static/imgs/special_1@2x.png");
  }

  .content-wrapper .text {
    line-height: 12px;
    font-size: 12px;
  }

  .support-count {
    position: absolute;
    right: 12px;
    bottom: 18px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .support-count .count {
    font-size: 14px;
  }

  .bulletin-wrapper {
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  .bulletin-title {
    display: inline-block;
    width: 22px;
    height: 12px;
    background-image: url("/static/imgs/bulletin@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    vertical-align: middle;
  }

  .bulletin-text {
    font-size: 12px;
  }

  .backGround {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }

  .detail {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    left: 0;
    top: 0;
  }

  .detail-wrapper {
    min-height: 100%;
  }

  .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
  }

  .detail-close i {
    font-style: normal;
    position: absolute;
  }

  .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;
  }

  .detail-main .name {
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
</style>
