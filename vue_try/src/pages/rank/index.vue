<template>
  <div class="page">
    <div class="header">
        <span v-for="(item,id) in Lists" :key="id" :data-cur="id"
         @click="swichNav" class="headerTitle" :class="current==id?'active':''">{{item.text}}</span>
    </div>

     <div class="contentPage">
            <div  class="contain" v-for="(items,index) in navLists" :key="index">
                <div class="containT" v-if="current==index" v-for="(item, id) in items.navList" :key="id">
                    <div class="box">
                        <img :src="item.src"  class="image" mode="scaleToFill" />
                        <div class="content">
                            <div class="title">{{item.title}}</div>
                            <p class="author">作者: <text class="authorList">{{item.author}}</text></p>
                            <p class="popular">人气: <span class="popularList">{{item.hot}}万</span></p>
                        </div>
                        <img :src="item.img" class="iconImg" style="width: 90rpx; height: 90rpx;"/>
                    </div>
                </div>
            </div>
      </div>
  
  <div class="footer">
      <div class="line"></div>
      <div class="footer_text">我们可是有底线的哟</div>
      <div class="line"></div>
  </div>
</div>
</template>
<script>
import Fly from '@/utils/fly'
export default {
  data () {
    return {
      current: 0,
      navLists: [],
      Lists: [
        {
          id: 0,
           text: '热搜榜'
        },
        {
          id: 1,
          text: '人气榜'
        },
        {
          id: 2,
          text: '畅销榜'
        },
        {
          id: 3,
          text: '新书榜'
        },
        {
          id: 4,
          text: '完结榜'
        },
        {
          id: 5,
          text: '免费榜'
        }
      ]
    }
  },
  onLoad () {
      Fly.get('/comic').then((res) =>{
        this.navLists = res.data.data.navLists;
        console.log(this.navLists);
      })
      },
  methods: {
   swichNav(e) {
     console.log(e);
     this.current = e.currentTarget.dataset.cur;
   }
  }
}
</script>

<style>
.header {
    width: 100%;
    float: left;
    color: #000;
    font-size: 30rpx;
    margin-top: 20rpx;
    padding-bottom: 20rpx;
    border-bottom: 1px solid #D9D9D9;
}
.headerTitle {
    margin-left: 50rpx;
}
.active {
    color: red;
}
.contentPage {
    background: #FCFCFC;
    border-top: 1px solid #DBDBDB;
}
.contain {
    width: 100%;
}
.box {
    width: 100%;
    height: 280rpx;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 25rpx;
    border-bottom: 1px solid #DBDBDB;

}
.box img {
    width: 180rpx;
    height: 240rpx;

}
.content {
    display: flex;
    flex-direction: column;
    height: 80rpx;
    line-height: 80rpx;
    margin-top: -170rpx;
    margin-left: 30rpx;
    color: gray;
    font-size: 26rpx;

}
.title {
    font-size: 34rpx;
    color: #000;
}
.author {
    width: 282rpx;
    display: block;
}
.footer {
  background: #F4F4F4;
  height: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.line {
  width: 60rpx;
  border-bottom: 1px solid gray;
}
.footer_text {
  font-size: 28rpx;
  color: #A6A6A6;
  margin: 30rpx 20rpx;
}
.iconImg {
    margin-left: 100rpx;
}
</style>
