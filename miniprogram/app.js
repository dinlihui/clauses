//app.js
App({
  onLaunch: function (options) {
    console.log('onLaunch 执行')
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'lalajie-7geohod12576cf3b',
        traceUser: true,
      })
    }

    this.globalData = {}
  },

  onShow(options) {
    console.log('onShow 执行')
    console.log(options)
  }
})
