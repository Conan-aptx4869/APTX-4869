<template>
  <div class="star" :class="starType">
    <span v-for="item in itemClasses" :class="item.Class" class="star-item" v-bind:key="item.id"></span>
  </div>
  <!--<someComponent></someComponent>-->
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  const CLS_ON = 'on';

  // import someComponent from './someComponent'
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType () {
        return 'star-' + this.size;
      },
      itemClasses () {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLS_ON);
        }
        if (hasDecimal) {
          result.push(CLS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style type="text/css">
  .star {

  }

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  .star-item:last-child {
    margin-right: 0;
  }

  .star.star-48 .star-item {
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }

  .star.star-48 .star-item.on {
    background-image: url("/static/imgs/star48_on@2x.png");
  }

  .star.star-48 .star-item.off {
    background-image: url("/static/imgs/star48_off@2x.png");
  }

  .star.star-48 .star-item.half {
    background-image: url("/static/imgs/star48_half@2x.png");
  }

  .star.star-36 {

  }

  .star.star-24 {

  }

</style>
