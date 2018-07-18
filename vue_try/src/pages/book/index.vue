<template>
  <div class="book">
    <div class="header" :scroll-x="true">
      <div class="collection">
          <span class="coll" @click="collect">收藏</span>
      </div>
      <div class="history">
        <span class="his" @click="history">历史</span>
      </div>
      <div class="rightImg">
        <img v-if="change" src="/static/images/change.png" class="change" style="width: 50rpx; height: 50rpx;" />
        <img v-if="shell" src="/static/images/delete.png" class="delete" style="width: 40rpx; height: 40rpx;" />
      </div>
    </div>
    
  </div>
</template>
<script>

export default {
    data () {
      return {
        change: true,
        shell: false
      }
    },
    methods : {
      collect () {
        this.change=true,
        this.shell=false
      },
      history(){
        this.change=false,
        this.shell=true
      }
    }
}
</script>
<style>
.book {
  width: 100%;
  height: 100vh;
  background: #F4F4F4;
}
.header {
  width: 100%;
  height: 90rpx;
  background: #fff;
  border-bottom: 1px solid #D7D2D2;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 34rpx;
  color: #BCBCBC;
}
.collection {
  margin-left: 250rpx;
  margin-right: 100rpx;


}
.coll:hover{
  border-bottom: 1px solid #000;
  color: #000;

}
.his:hover {
  border-bottom: 1px solid #000;
  color: #000;
}
.rightImg {
  margin-top: 25rpx;
  margin-left: 180rpx;
}
</style>


