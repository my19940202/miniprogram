// index.js
// const app = getApp()
Page({
    data: {
        haveCreateCollection: false
    },
    onLoad() {
        // 数据库记录获取
        const db = wx.cloud.database();
        db.collection('housing_forms').get().then(res => {
            // res.data 包含该记录的数据
            console.log(res.data)
        });
        // 云函数调用测试
        wx.cloud.callFunction({
            // 云函数名称
            name: 'helloworld',
            // 传给云函数的参数
            data: {a: 1},
            success: function(res) {
                console.log(res.result)
            },
            fail: console.error
        })
    },
    jumpTo(event) {
        wx.navigateTo({
            url: `/pages/${event.target.dataset.path}/index`,
        });
    }
});
