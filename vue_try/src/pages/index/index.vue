<template>
<div class="main">
  <div class="header">
    <div class="search">
        <div class="search-title" @click="toSearch">
            <img src="/static/images/search.png" class="search-icon" style="width: 35rpx; height: 35rpx;">
            <span class="text">搜漫画名/作者....</span>
        </div>
    </div>
    <h-swiper></h-swiper>
    <div class="specialList">
      <div class="rank" @click="toRank">
        <img src="/static/images/rank.png" style="width:70rpx; height: 70rpx;">
        <p style="color: #B1AEAE; font-size: 25rpx;">排行</p>
      </div>
      <div class="vip" @click="toVip">
        <img src="/static/images/vip.png" style="width:70rpx; height: 70rpx;">
        <p style="color: #B1AEAE; font-size: 25rpx;">VIP专区</p>
      </div>
      <div class="classify" @click="toClassfiy">
        <img src="/static/images/class.png" style="width:70rpx; height: 70rpx;">
        <p style="color: #B1AEAE; font-size: 25rpx;">分类</p>
      </div>
    </div>
  </div>
  <div class="content">
        <div class="page" v-for="(items, index) in comicList" :key="index" >
            <div class="title" >
                <img :src="items.src" class="title_image" style="width: 50rpx; height: 50rpx;">
                <div class="text">{{items.text}}</div>
                <div class="more" @click="toMore">更多</div>
                <img src="/static/images/arrow.png" style="width: 30rpx; height: 30rpx;" class="arrow">
            </div>
            <div class="imgList">
              <div class="img_content" v-for="(item, id) in items.items" :key="id">
                <img :src="item.img" class="bd_image">
                <div class="topic">{{item.topic}}</div>
                <div class="intro">{{item.intro}}</div>
              </div>
            </div>
          
            <div class="secondList">
              <div class="second_content" v-for="(sedList, i) in items.lists" :key="i">
                <img :src="sedList.img" class="second_image">
                <div class="topic">{{sedList.topic}}</div>
                <div class="intro">{{sedList.intro}}</div>
              </div>
            </div>
            <div class="thirdList" v-for="(last, id) in items.lasts" :key="id" >
                <div class="third_content">
                  <img :src="last.img" class="third_image">
                </div>
                <div class="third_contain">
                  <span class="third_title">
                    <img :src="last.rankImg" class="rankList" style="width: 50rpx; height: 50rpx;">
                    <div class="third_topic">{{last.topic}}</div>
                  </span>
                  <div class="thrid_body">
                    <p class="popularList">人气: <span class="rankPopular">{{last.popular}}亿</span> </p>
                    <div class="thrid_intro">{{last.intro}}</div>
                  </div>
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
import swiper from '@/components/swiper/swiper'
import Fly from '@/utils/fly'
export default {
  data () {
    return {
      comicList: []
    }
  },
  components: {
    "h-swiper": swiper

  },
  onLoad () {
    Fly.get('/comic').then((res) =>{
      console.log(res);
      this.comicList = res.data.data.content ;
    })
  },

  methods: {
    toSearch () {
      wx.navigateTo({
        url: '/pages/search/main',
        success: function(res) {
          console.log('success');
        }
      })
    },
    toMore () {
      wx.navigateTo({
        url: '/pages/purList/main',
        success: function(res) {
          console.log('success');
        }
      })
    },
    toVip () {
      wx.navigateTo({
        url: '/pages/purList/main',
        success: function(res) {
          console.log('success');
        }
      })
    },
    toClassfiy () {
      wx.navigateTo({
        url: '/pages/classFiy/main',
        success: function(res) {
          console.log('success');
        }
      })
    },
    toRank () {
      wx.navigateTo({
        url: '/pages/rank/main',
        success: function(res) {
          console.log('success');
        }
      })
    }
    }
    
}

</script>

<style lang="scss">
 .main {
   background: #F4F4F4;
   height: 100vh;
 }
 .header {
   background: #fff;

 }
 .specialList {
   height: 160rpx;
   display: flex;
   align-items: center;
   justify-content: space-around;
 }
 .search {
   width: 90%;
   height: 70rpx;
   background: #F3F3F3;
   border-radius: 100rpx;
   margin-top: 30rpx;
   margin-left: 46rpx;
   
}
.search-title {
    width: 100%;
    height: 70rpx;
    color: #D9D9D9;
    font-size: 30rpx;
    display: flex;
    align-items: center;
}
.search img {
    margin-left: 20rpx;
}
.search .text {
    margin-left: 20rpx;
}
.content {
  margin-top: 20rpx;
  width: 100%;
  background: #F2F2F2;
  border-bottom: 1px solid #D5D5D5;
}
.page {
  background: #fff;
}
.title {
  margin-top: 20rpx;
  width: 100%;
  height: 130rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20rpx;

}
.title .title_image {
  margin-left: 250rpx;
}
.text {
  width: 480rpx;
  font-size: 38rpx;
  margin-left: 10rpx;
}
.more {
  width: 65rpx;
  margin-right: -2rpx;
  font-size: 24rpx;
  color: gray; 
}
.arrow {
  margin-right: 15rpx;
}
.imgList {
  width: 100%;
}
.img_content {
  width: 45%;
  float: left;
  margin-left: 20rpx;
  margin-right: 10rpx;
  
}
.img_content .bd_image {
  // box-shadow: 0 0 3px #000;
  width: 100%;
  height: 350rpx;
}
.img_content:nth-child(2n) {
  margin-left: 20rpx;
}
.topic {
  width: 100%;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 34rpx;
}
.intro {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  font-size: 28rpx;
  color: gray;
  margin-bottom: 25rpx;
}
.secondList {
  width: 100%;
}
.second_content {
  width: 30%;
  float: left;
  margin-left: 17rpx;
}
.second_content:nth-child(3n) {
  margin-left: 20rpx;
}
.second_image {
  width: 100%;
  height: 320rpx;
}
.thirdList {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 20rpx;
}

.third_content {
  width: 44%;
  height: 230rpx;

}
.third_contain {
  width: 48%;
  height: 230rpx;
  margin-left: 30rpx;
}
.third_image {
  width: 100%;
  height: 200rpx;
}
.third_title {
  display: flex;
  flex-direction: row;
}
.third_topic {
  font-size: 34rpx;
  color: #000;
  letter-spacing: 2rpx;
  margin-left: 20rpx;
}
.thrid_body {
  margin-left: 65rpx;
}
.popularList {
  color: #BFBFBF;
  font-size: 27rpx;
}
.rankPopular {
  color: red;
  margin-left: 10rpx;
}
.thrid_intro {
  overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #8B8B8B;
  font-size: 28rpx;

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


</style>
