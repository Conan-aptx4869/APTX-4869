<template>
  <div class="goods">
    <div class="menu-wrapper" rel="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" rel="foodWrapper">
      <ul>
        <li v-for="item in goods" class="food-list" v-ref="">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售 {{food.sellCount}}份</span>
                  <span>好评率 {{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥ {{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  // import someComponent from './someComponent'
  import BScroll from 'better-scroll';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        goods: [],
        listHeight: []
      };
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/static/data/data.json').then((res) => {
        this.goods = res.data.goods;

        console.log(this.goods);
      });
    },
    methods: {
      _
    }
  };
</script>

<style type="text/css">
  .goods {
    position: absolute;
    top: 188px;
    bottom: 46px;
    width: 100%;
    display: flex;
    overflow: hidden;
  }

  .goods .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    overflow-y: scroll;
  }

  .goods .foods-wrapper {
    flex: 1;
  }

  .goods .menu-wrapper .menu-item {
    display: table;
    height: 54px;
    width: 56px;
    line-height: 14px;
    font-size: 14px;
  }

  .goods .menu-wrapper .icon {
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    display: inline-block;
  }

  .menu-wrapper .icon.decrease {
    background-image: url("/static/imgs/decrease_2@2x.png");
  }

  .menu-wrapper .icon.discount {
    background-image: url("/static/imgs/discount_1@2x.png");
  }

  .menu-wrapper .icon.guarantee {
    background-image: url("/static/imgs/guarantee_1@2x.png");
  }

  .menu-wrapper .icon.invoice {
    background-image: url("/static/imgs/invoice_1@2x.png");
  }

  .menu-wrapper .icon.special {
    background-image: url("/static/imgs/special_1@2x.png");
  }

  .menu-wrapper .menu-item .text {
    display: table-cell;
    width: 56px;
    height: 54px;
    vertical-align: middle;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
  }

  .foods-wrapper {
    flex: 1;
    overflow-y: scroll;
  }

  .foods-wrapper .title {
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    background: #f3f5f7;
  }

  .foods-wrapper .food-item {
    padding: 12px;
    display: flex;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    margin-bottom: 12px;
  }

  .foods-wrapper .food-item .icon {
    margin-right: 10px;
    flex: 0 0 57px;
  }

  .foods-wrapper .food-item .content {
    flex: 1;
  }

  .foods-wrapper .food-item .content .name {
    margin-bottom: 5px;
    font-size: 16px;
    color: rgb(7, 17, 27);
  }

  .foods-wrapper .food-item .icon > img {
    width: 57px;
    height: 57px;
  }

  .foods-wrapper .food-item div {
    margin: 0;
  }

  .foods-wrapper .food-item .content .extra {
    line-height: 10px;
    font-size: 10px;
  }

  .foods-wrapper .food-item .content .desc {
    line-height: 14px;
  }

  .foods-wrapper .food-item .content .extra .count {
    margin-right: 12px;
  }

  .foods-wrapper .food-item .price {
    font-weight: 700;
    line-height: 24px;
  }

  .foods-wrapper .food-item .price .now {
    color: orangered;
    margin-right: 18px;
    font-size: 16px;
  }

  .foods-wrapper .food-item .price .old {
    text-decoration: line-through;
    font-size: 10px;
    color: #999;

  }
</style>
