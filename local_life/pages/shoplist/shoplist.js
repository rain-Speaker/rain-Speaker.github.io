// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航传递过来的参数对象
    query: {},
    // 存放页面数据的数组
    shopList: [],
    // 请求页面
    page: 1,
    // 请求多少条数据
    pageSize: 10,
    // 总数据条数
    total: 0,
    // 节流阀
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      query: options,
    });
    this.getShopList();
  },

  getShopList(cb) {
    // 改变节流阀状态
    this.setData({
      isLoading: true
    })
    // 展示loading效果
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: `https://www.escook.cn/categorier/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: res => {
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          total: parseInt(res.header['X-Total-Count'])
        });
      },
      // 完成时隐藏loading效果
      complete: () => {
        wx.hideLoading();
        this.setData({
          isLoading: false
        });
        // 若传入了cb回调函数，则执行，没有则不执行
        cb && cb();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 设置标题只能在onReady
    wx.setNavigationBarTitle({
      title: this.data.query.name
    })
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
    // 重置关键数据
    this.setData({
      page: 1,
      shopList: [],
      total: 0
    });
    this.getShopList(() => {
      wx.stopPullDownRefresh();
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.page * this.data.pageSize >= this.data.total) {
      wx.showToast({
        title: '划到底了',
        icon: 'none'
      });
      return;
    } else if (this.data.isLoading) {
      return;
    } else {
      this.setData({
        page: this.data.page + 1
      });
      this.getShopList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})