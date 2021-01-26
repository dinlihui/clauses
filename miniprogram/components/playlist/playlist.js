// components/playlist/playlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       playlist:{
         type: Object,
       }
  },
  observers:{
    ['playlist.playCount'](count){
      this.setData({
        _count: this._tranNumber(count,2)
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  _count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
