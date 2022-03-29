// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    refreshCount: 0,
    username: 'zhangsan',
    city: 'BEIJING',
    slideButtons: [],
    swiperH: '', //swiper高度
    nowIdx: 0, //当前swiper索引
    imgList: [ //图片列表
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ]
  },

  //获取swiper高度
  getHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth - 2 * 50; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width;
    var sH = winWid * imgh / imgw + "px"
    this.setData({
      swiperH: sH //设置高度
    })
  },
  //swiper滑动事件
  swiperChange: function (e) {
    this.setData({
      nowIdx: e.detail.current
    })
  },

  addCount() {
    this.setData({
      count: this.data.count + 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      slideButtons: [{
        text: '收藏',
        src: '/images/favor.svg'
      }, {
        text: '喜欢',
        src: '/images/like.svg'
      }, {
        type: 'warn',
        text: '删除',
        src: '/images/delete.svg'
      }],
    });
  },

  slideButtonTap(e) {
    console.log(e);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      count: 0,
      refreshCount: this.data.refreshCount + 1
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})