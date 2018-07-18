<template>
 <div class="swiper">
    <swiper class="category-list" :autoplay="true" :circular="true" :indicator-dots="true"  indicator-color="#AA8C81" indicator-active-color="#000000">
        <swiper-item v-for="(items, index) in categoryList" :key="index" @click="toDetails">
            <img :src="items.src" class="category-img"/>
        </swiper-item>
    </swiper>
 </div>
</template>
<script>
export default {
    data() {
        return {
            categoryList: [
                
                {src:'http://shyc.ufile.ucloud.com.cn/%E9%86%89%E7%8E%B2%E7%8F%91.jpg'},
                {src:'http://shyc.ufile.ucloud.com.cn/%E8%BD%A9%E8%BE%95%E5%89%91%E4%B9%8B%E6%B1%89%E4%B9%8B%E4%BA%91.jpg'},
                {src:'http://shyc.ufile.ucloud.com.cn/%E5%89%83%E5%A4%B4%E5%8C%A0.jpg'},
                {src:'http://shyc.ufile.ucloud.com.cn/%E9%B1%BC%E5%94%87%E7%9A%84%E4%BA%BA%E7%B1%BB%E6%94%BE%E6%9C%95%E8%B5%B0.jpg'},
                {src:'http://shyc.ufile.ucloud.com.cn/%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A3.jpg'}
        ]
        }
    },
    methods: {
        toDetails() {
            wx.navigateTo({
                url: '/pages/details/main',
                success: function (res) {
                    console.log('success');
                }
            })
        }
    }
}
</script>
<style>
.category-list {
    margin-top: 16rpx;
    width: 100%;
    height: 400rpx;
    /* background: pink; */
}
.category-list img {
    width: 752rpx;
    height: 400rpx;
}
</style>


