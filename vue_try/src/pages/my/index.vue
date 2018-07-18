<template>
    <div class="my">
        <div class="container">
            <div class="header">
                <div class="userImg">
                    <open-data class="thumb" type="userAvatarUrl"></open-data>
                </div>
                <div class="userName">
                    <open-data class="nickname" lang="zh_CN" type="userNickName"></open-data>
                    <p>ID: 108910407</p>
                </div>
            </div>
            <div class="contain" @click="toOther">
                <view class="weui-cells">
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <view class="weui-cell__hd">
                        <img src="/static/images/egg.png" />
                    </view>
                    <view class="weui-cell__bd">我的岛蛋</view>
                    <view class="weui-cell__ft">0岛蛋 <button class="weui-cell_button" style="background: #F85D1D;">充值</button></view>
                </navigator>
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <view class="weui-cell__hd">
                        <img src="/static/images/vip2.png" />
                    </view>
                    <view class="weui-cell__bd">我的VIP</view>
                    <view class="weui-cell__ft ">未开通 <button  class="weui-cell_button" style=" background: #F85D1D;">开通</button></view>
                </navigator>
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <view class="weui-cell__hd">
                        <img src="/static/images/quan_16.png" />
                    </view>
                    <view class="weui-cell__bd">漫画券</view>
                    <view class="weui-cell_name">0漫画券</view>
                    <view class="weui-cell__ft weui-cell__ft_in-access"></view>
                </navigator>
            </view>
            <view class="weui-cells">
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <view class="weui-cell__hd">
                        <img src="/static/images/a.png" />
                    </view>
                    <view class="weui-cell__bd">充值记录</view>
                    <view class="weui-cell__ft weui-cell__ft_in-access"></view>
                </navigator>
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <view class="weui-cell__hd">
                        <img src="/static/images/b.png"/>
                    </view>
                    <view class="weui-cell__bd">消费记录</view>
                    <view class="weui-cell__ft weui-cell__ft_in-access"></view>
                </navigator>
            </view>
             <view class="weui-cells">
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <view class="weui-cell__hd">
                        <img src="/static/images/c.png" />
                    </view>
                    <view class="weui-cell__bd">求书&反馈</view>
                    <view class="weui-cell__ft weui-cell__ft_in-access"></view>
                </navigator>
                <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                    <view class="weui-cell__hd">
                        <img src="/static/images/c.png"/>
                    </view>
                    <view class="weui-cell__bd">自动购买下一话</view>
                    <view class="weui-cell__ft"> <switch class="switchTap" checked type="switch" @click="switchChange" color="red" style="height: 40rpx; width: 100rpx"/></view>
                </navigator>
            </view>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toOther () {
            wx.showToast ({
                title: '待完善',
                icon: 'success',
                duration: 2000
            })
        }
    }
}
</script>

<style>
.my {
    font-size: 30rpx;
    background: #F4F4F4;
    height: 100vh;
}
.header {
    height: 260rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #fff;
    align-items: center;
}
.userImg {
    overflow: hidden;
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    margin-left: 30rpx;
}
.thumb {
    
    border-radius: 50%;
}
.userName {
    margin-left: 30rpx;
    line-height: 100rpx;
}
.nickname {

    color: #000;
    font-size: 40rpx;
}
.userName p {
    color: #AFB0B2;
    font-size: 30rpx;
}
.weui-cells {
    margin-top: 20rpx;
}
.weui-cell__hd img{
    width: 50rpx;
    height: 50rpx;
}
.weui-cell__bd {
    color: #878787;
    margin-left: 10rpx;
    margin-top: -12rpx;
}
.weui-cell__ft {
    display: flex;
    align-items: center;
    color: #F85D1D;
    flex-direction: row;
    font-size: 24rpx;
}
button {
    width: 134rpx;
    height: 54rpx;
    display: flex;
    align-items: center;
    border-radius: 50px;
    color: #fff;
    font-size: 30rpx;
    margin-left: 20rpx;
    /* top: 10rpx; */
}
.weui-cell_name {
    color: #F85D1D;
    font-size: 24rpx;
    margin-right: 20rpx;
}
.switchTap {
    margin-top: -15rpx;
}

</style>
