import Vue from 'vue'
import App from './App'



Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

Vue.prototype.getList = function () {
  wx.showLoading({
    title: '加载中'
  })
  this.$http.get('/comic').then((res) => {
    this.comicList = res.data.data.content;
    wx.hideLoading();
  }).catch((e) => {
    console.log(e)
  })
}

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/book/main', 'pages/my/main', 'pages/details/main', 'pages/search/main','pages/rank/main','pages/classFiy/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#F4F4F4',
      navigationBarTitleText: '漫画岛',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#C9C6C6",
      selectedColor: "#F20C0C",
      backgroundColor: "#fff",
      borderStyle: "#a8a8a8",
      list: [
        {
          pagePath: "pages/index/main",
          iconPath: "static/images/index.png",
          selectedIconPath: "static/images/index1.png",
          text: "书城"
        },
        {
          pagePath: "pages/book/main",
          iconPath: "static/images/book.png",
          selectedIconPath: "static/images/book1.png",
          text: "书架"
        },
        {
          pagePath: "pages/my/main",
          iconPath: "static/images/my.png",
          selectedIconPath: "static/images/my1.png",
          text: "我的"
        }
      ]
    }
  }
}

