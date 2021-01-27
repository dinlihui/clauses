// pages/music/music.js
const MAX_LIMIT = 15
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
      url:'http://p1.music.126.net/pOXTFta-mhTpZOGhBBWvhQ==/109951165664682857.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/zUv2mRobckK7Tdn2bp9iSA==/109951165664840470.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/Z90NF2dHuBYrV6x-U9jJJQ==/109951165664719544.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/vAjwukVm-H0LOqzy4FTJXA==/109951165664851877.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/j0gp3gBDRRoqIXxAs0v7oA==/109951165664720877.jpg?imageView&quality=89'
    },{
      url:'http://p1.music.126.net/9Ayx-EeCnuLRWKTcIhGB6g==/109951165664742856.jpg?imageView&quality=89'
    }],
     playlist: [
     {
      "id": "1001",
      "playCount":1.461238e+06,
      "name": "一秒沉醉 • 欧美迷情仙女嗓",
      "picUrl": "http://p4.music.126.net/Hr8sEJzhAKvKo8x56n-Yhw==/109951165525778915.jpg?param=140y140"
    },{
      "id": "1002",
      "playCount":62282.6,
      "name": "欧美流行歌曲｜好听到单曲循环",
      "picUrl": "http://p4.music.126.net/NM-wa_-u-H-fWrwk1CCg9w==/109951165329812130.jpg?param=140y140"
    },{
      "id": "1003",
      "playCount":1.712352e+06,
      "name": "春昼短 剧本杀歌单",
      "picUrl": "http://p3.music.126.net/7i8Iz1Faq4fRG8QI7J72ng==/109951165570057766.jpg?param=140y140"
    },{
      "id": "1004",
      "playCount":6.586255e+06,
      "name": "2020年度最热欧美新歌TOP50",
      "picUrl": "http://p3.music.126.net/oIJhYBUIOkrDZxferlNHkA==/109951165589620531.jpg?param=140y140"
    },{
      "id": "1005",
      "playCount":1.06578992e+08,
      "name": "希望开心和好运奔向我 与我撞个满怀",
      "picUrl": "http://p3.music.126.net/neFYif9QejB_sygh8zInwg==/109951165558451625.jpg?param=140y140"
    },{
      "id": "1006",
      "playCount":1.574256e+6,
      "name": "在没有相见的日子里，请你万分保重",
      "picUrl": "http://p4.music.126.net/1u0qwg87O8-IZwO3h42kQg==/109951165409243905.jpg?param=140y140"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlaylist()
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  _getPlaylist() {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'playlist'
    }).then((res) => {
      console.log(res)
      this.setData({
        playlist: res.result
      })
      wx.hideLoading()
    })
  },
})