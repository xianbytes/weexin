//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text1:"推荐",
    text2: "最新上架",
    motto: 'Hello World',
    userInfo: {},
    meun:["首页","全部商品","我的"],
    imgUrls: [
      'http://oyrujocej.bkt.clouddn.com/1.jpg',
      'http://oyrujocej.bkt.clouddn.com/2.jpg',
      'http://oyrujocej.bkt.clouddn.com/3.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    itemPr:"20",
    newPd:[
      {
        name:"产品1",
        image:"http://oyrujocej.bkt.clouddn.com/6.jpg",
        throld:80,
        money:"149",
      },
      {
        name:"产品2",
        image: "http://oyrujocej.bkt.clouddn.com/5.jpg",
        throld: 80,
        money: "149",
      }, {
        name: "产品3",
        image: "http://oyrujocej.bkt.clouddn.com/4.jpg",
        throld: 80,
        money: "159",
      },{
        name: "产品4",
        image: "http://oyrujocej.bkt.clouddn.com/3.jpg",
        throld: 80,
        money: "179",
      },{
        name: "产品5",
        image: "http://oyrujocej.bkt.clouddn.com/2.jpg",
        throld: 80,
        money: "129",
      }, {
        name: "产品6",
        image: "http://oyrujocej.bkt.clouddn.com/1.jpg",
        throld: 80,
        money: "189",
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserInfo: function(e) {
    
  },
  onReady:function()
  {
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        var windowHeight = res.windowHeight;
         
      }
    })
  }
})
