<template>
  <div>
    <div class="search">
        <div class="search-title">
            <img src="/static/images/search.png" class="search-icon" style="width: 35rpx; height: 35rpx;">
            <input type="text" placeholder="搜漫画名/作者...." class="text" autofocus/> 
        </div>
    </div>
    <div class="popular">
        <div class="header">
            <p class="sousuo">热门搜索</p>
            <div class="change" @click="doChange">
              <img src="/static/images/06.png" style="width: 40rpx; height: 40rpx;"/>
              <p class="change1" @click="change">换一换</p>
            </div>
        </div>
        <view class="popularBox">
            <div class="container">
                <view v-for="(item, id) in categoryList[curIndex].items" :key="id" class="popularList" >
                    <text class="popularList_title">{{item.title}}</text>
            </view>
            </div>
        </view>
    </div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            curIndex: 0,
            show: true,
            hasShow: false,
            categoryList: [
                {
                    items:[
                    {id:1, title: '吾家有小妾'},
                    {id:2, title: '家兄又在作死'},
                    {id:3, title: '枕上恶魔总裁'},
                    {id:4, title: '天狐劫'},
                    {id:5, title: '宠狐成妃'},
                    {id:6, title: '我的食神上仙'},
                    {id:7, title: '龙符之王道天下'}
                    ]
                },
                {
                    items:[
                    {id:1, title: '南风也曾入我怀'},
                    {id:2, title: '妖神记'},
                    {id:3, title: '寻找前世之旅'},
                    {id:4, title: '谢文东'},
                    {id:5, title: '宠狐成妃'},
                    {id:6, title: '斗罗大陆'},
                    {id:7, title: '偷星九月天'}
                    ]
                },
                {
                     items: [
                        {id: 1, title: '白泽图'},
                        {id: 2, title: '龙族'},
                        {id: 3, title: '天师是网红'},
                        {id: 4, title: '萌神恋爱学院'},
                        {id: 5, title: '堕神诸天'},
                        {id: 6, title: '诡中有诡'},
                        {id: 7, title: '骄里娇气'},
                        {id: 8, title: '异世王妃狂想曲'},
                        {id: 9, title: '霸道总裁爱上我'},
                        {id: 0, title: '初恋男友是BOSS'},
                    ]
                },
                {
                     items: [
                        {id: 1, title: '婚战不休'},
                        {id: 2, title: '红颜如夕'},
                        {id: 3, title: '魔法仙气一乾坤'},
                        {id: 4, title: '枕上恶魔总裁'},
                        {id: 5, title: '冰山总裁强宠妻'},
                        {id: 6, title: '宛香'},
                        {id: 7, title: '龙符之王道天下'},
                        {id: 8, title: '杀手小姐，谈个恋爱'},
                        {id: 9, title: '繁花似锦'},
                        {id: 0, title: '玲珑吾妻'},
                    ]
                }
            ],
                    
                
                   
        }
    },

    methods: {
        change () {
            if (this.curIndex == 3) {
                this.curIndex = 0;
            } else {
                this.curIndex++;
            }
        }
    }
}
</script>
<style>
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
    /* color: #D9D9D9; */
    font-size: 30rpx;
    display: flex;
    align-items: center;
}
.search img {
    margin-left: 20rpx;
}
input {
    margin-left: 20rpx;
}
.popular {
    margin-top: 60rpx;
    width: 100%;
}
.header {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.sousuo {
    font-size: 45rpx;
    letter-spacing: 5rpx;
    margin-left: 20rpx;
}
.change {
    display: flex;
    flex-direction: row;
}
.header img {
    margin-top: 20rpx;
    margin-left: 375rpx;
}
.change1 {
    color: #A4A4A4;
    font-size: 27rpx;
    margin-top: 20rpx;
    margin-left: 10rpx;
}
.popularBox {
    width: 100%;
    margin: 20rpx 20rpx;
    
}
.popularList {
    float: left;
    width: auto;
    display: block;
    height: 60rpx;
    background: #F1F1F1;
    margin-left: 30rpx;
    margin-top: 20rpx;
}
.popularList:nth-child(3n) {
    margin-left: 20rpx;
}
.popularList_title {
    font-size: 27rpx;
    color: gray;
    display: flex;
    align-items: center;
    height: 60rpx;
    margin-left: 22rpx;
    margin-right: 20rpx;
}

</style>


