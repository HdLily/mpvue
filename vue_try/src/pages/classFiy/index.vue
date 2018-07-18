<template>
    <div class="page">
        <div class="header">
            <span v-for="(item,id) in Lists" :key="id" :data-cur="id"
            @click="swichNav" class="headerTitle" :class="current==id?'active':''">{{item.text}}</span>
        </div>
        <div class="container">
            <div class="contain" v-for="(items,index) in classFlies" :key="index">
                <div class="box" v-if="current==index" v-for="(item, id) in items.classFly" :key="id">
                    <img :src="item.src"  class="image" mode="scaleToFill">
                    <div class="content">
                        <div class="title">{{item.title}}</div>
                        <p class="author">作者: <text class="authorList">{{item.author}}</text></p>
                        <p class="popular">人气: <span class="popularList">{{item.hot}}亿</span></p>
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
            Lists: [
                { id: 0, text: '热血'},
                { id: 1, text: '搞笑'},
                { id: 2, text: '恋爱'},
                { id: 3, text: '魔幻'},
                { id: 4, text: '悬疑'},
                { id: 5, text: '少儿'},
            ],
           classFlies: []
        }
    },
     onLoad () {
      Fly.get('/comic').then((res) =>{
        this.classFlies = res.data.data.classFlies;
        console.log(res);
        console.log(this.classFlies);
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
    line-height: 60rpx;
    font-size: 30rpx;
    margin-top: 20rpx;
    padding-bottom: 20rpx;
    border-bottom: 1px solid #D9D9D9;
}
.headerTitle {
    margin-left: 75rpx;
}
.active {
    color: red;
}
.container {
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
