<template>
    <div class="container">
        <div class="background">
            <img src="http://shyc.ufile.ucloud.com.cn/%E5%89%83%E5%A4%B4%E5%8C%A0.jpg" mode="center" class="background-image">
        </div>
        <div class="content">
            <div class="topLine">
                <img src="https://oss.mkzcdn.com/zymkcover/999/mh/97024.jpg!width-400"  class="content-image">
                <div class="leftLine">
                    <text class="title">剃头匠</text>
                    <div class="author">作者 : <p class="author_pur">木羊公社</p> | <div class="popular">人气 :<p class="hot">21.47亿</p></div>
                    </div>
                    <star/>
                </div>
            </div>
            <text class="multiLine">漫画: 我是民间剃头匠人,为死人剃阴头,为活人断富贵,捉不可知处女异兽,退远而来凶神,一把剃头刀,荡尽人间鬼魅! 原著: 湘西鬼王</text>

            <button class="collect" style="background: #fff; color: red; "><img src="/static/images/bookshelf.png" style="width:50rpx; height: 50rpx;">加入收藏</button>
            <button class="goOnRead"  style="background: red; color: #fff">继续阅读</button>
        </div>
        <div class="content-T">
            <div class="inner-content">
                <span class="top"><p class="catalog">目录</p></span> 
                <div class="nextAll" v-for="(item, index) in catalogs" :key="index">
                    <img :src="item.src"  class="catalog-image" mode="scaleToFill">
                    <div class="inner-some">
                         <span class="rightSide">
                            <p class="number">{{item.number}}</p>
                            <div class="title">第{{item.Num}}话 <p class="titleList">{{item.title}}</p> </div>
                        </span>
                        <div class="date">{{item.date}}</div>
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
import star from '@/components/star'
export default {
    data () {
        return {
            catalogs: []
        }
    },
    components: {
        star
    },
    onLoad () {
        Fly.get('/comic').then((res) =>{
        console.log(res);
        this.catalogs = res.data.data.catalogs;
        })
  },
}
</script>

<style>
.container {
    width: 100%;
    background: #F4F4F4;
}
.background {
    width: 100%;
    height: 300rpx;

}
.background img {
    width: 100%;
    height: 300rpx;
}
.content {
    position: relative;
    width: 100%;
    background: #fff;
    height: 535rpx;
}
.topLine {
    width: 100%;
    height: 240rpx;
}
.leftLine {
    position: relative;
    top: 20rpx;
    /* height: 230rpx; */
    margin-left: 280rpx;
}
.content-image {
    position: absolute;
    box-shadow: 0 0 3px #000;
    top: -40rpx;
    width: 190rpx;
    height: 250rpx;
    z-index: 99;
    left: 40rpx;
}
.author {
    display: flex;
    flex-direction: row; 
    color: gray;
    font-size: 26rpx;
} 
.popular {
    margin-left: 20rpx;
    display: flex;
    flex-direction: row;
}
.author_pur {
    margin-left: 20rpx;
    margin-right: 20rpx;
}
.hot {
    margin-left: 20rpx;
}
.multiLine {
    margin: 0 auto;
    height: 200rpx;
    display: inline-block;
    margin-left: 20rpx;
    color: gray;
    font-size: 28rpx;
}
.collect {
    position: relative;
    width: 240rpx;
    height: 82rpx;
    top: -22rpx;
    left: 40rpx;
    border-radius: 50rpx;
    float : left;
    font-size: 30rpx;
    line-height: 82rpx;
    border: 1px solid red;
}
.collect img {
    position: relative;
    top: 10rpx;
    left: -17rpx;
}
.content-T {
    position: absolute;
    width: 100%;
    background: #fff;
    margin-top: 20rpx; 
}
.inner-content {
    margin-left: 20rpx;
}
.catalog {
    position: relative;
    top: 35rpx;
    margin-bottom: 45rpx;
    color: #000;
    font-size: 38rpx;
    margin-left: 20rpx;

}
.goOnRead {
    right: -15rpx;
    position: relative;
    top: -30rpx;
    width: 400rpx;
    height: 86rpx;
    border-radius: 50rpx;
    line-height: 86rpx;
    font-size: 34rpx;
}
.nextAll {
    display: flex;
    height: 150rpx;
    flex-direction: row;
    margin-left: 20rpx;
    margin-top: 15rpx;
}
.catalog-image {
    width: 300rpx;
    height: 140rpx;
}
.inner-some {
    display: flex;
    flex-direction: column;
    margin-left: 30rpx;
}
.rightSide {
    display: flex;
    flex-direction: row;
    font-size: 30rpx;
}
.title {
    display: flex;
    flex-direction: row;
    margin-left: 25rpx;
}
.titleList {
    margin-left: 10rpx;
}
.date {
    color: gray;
    font-size: 24rpx;
    margin-left: 50rpx;
    margin-top: 40rpx;
}
.footer {
  border-top: 1px solid #C1BEBE;
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
