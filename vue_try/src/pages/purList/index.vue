<template>
    <div class="container">
        <div class="contain" v-for="(item,index) in items" :key="index">
            <div class="box">
                <img :src="item.src"  class="image" mode="scaleToFill">
                <div class="content">
                    <div class="title">{{item.title}}</div>
                    <p class="author">作者: <text class="authorList">{{item.author}}</text></p>
                    <p class="popular">人气: <span class="popularList">{{item.hot}}亿</span></p>
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
export default {
    data() {
        return {
            items: [
                {
                    title: '将门毒妃',
                    author: '药物曹',
                    hot: '1.47',
                    src: 'https://www.paozha.com/upfromwin/pics/7lgirr5dl0v61jf2_0.jpg'
                },
                {
                    title: '帝少专宠黑道妻',
                    author: '冬漫社',
                    hot: '1.45',
                    src: 'http://www.gugu5.com/upload2/18833/2017/12-16/20171216145841_3281bwujgrkv_small.jpg'
                },
                {
                    title: '天狐劫',
                    author: '泷羽',
                    hot: '13.18',
                    src: 'http://image.samanlehua.com/mh/97025.jpg-noresize.webp'
                },
                {
                    title: '劫天运',
                    author: '肥鱼工作室',
                    hot: '6.47',
                    src: 'http://shyc.ufile.ucloud.com.cn/d466bbbd-3d4b-4abd-ad75-f08e2ff11ded/upload/fm/jietianyun.jpg'
                },
                {
                    title: '女神的近身侍卫',
                    author: '大周互娱',
                    hot: '1.97',
                    src: 'http://shyc.ufile.ucloud.com.cn/3315c836-81df-4f0b-b60a-cebbfbc402d1/%E5%A5%B3%E7%A5%9E%E7%9A%84%E8%BF%91%E8%BA%AB%E4%BE%8D%E5%8D%AB.jpg'
                },
                {
                    title: '龙隐者',
                    author: '分布文化',
                    hot: '8208.72',
                    src: 'https://manhua.qpic.cn/vertical/0/22_07_42_d4adcbb2d6d3a46921196b1884d0f981_1506037326824.jpg/420'
                },
                {
                    title: '前妻别来无恙',
                    author: '书从文化',
                    hot: '2.44',
                    src: 'https://www.paozha.com/upfromwin/pics/uu28vpxwmwtmmn9j_1.jpg'
                },
                {
                    title: '先婚后宠小娇妻',
                    author: '畅读书城',
                    hot: '1.34',
                    src: 'http://www.gugu5.com/upload/2017-12-28/2017122815920891.jpg'
                },
                {
                    title: '王爷你好坏',
                    author: '万画筒漫画',
                    hot: '1.02',
                    src: 'https://manhua.qpic.cn/vertical/0/17_22_02_f8ec580097d050eea4aafc60a7c7871f_1502978559332.jpg/420'
                },
                {
                    title: '不良宠婚',
                    author: '开源动漫',
                    hot: '4469.63',
                    src: 'https://manhua.qpic.cn/vertical/0/26_11_07_7461e374460e8f72f946717e4dbe3435_1506395269903.jpg/420'
                },
            ]
        }
    }
}
</script>
<style>
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
