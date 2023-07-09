// index.js
// const app = getApp()
const { envList } = require('../../envList.js');

Page({
    data: {
        haveCreateCollection: false
    },
    onLoad() {
        console.log('this is onLoad')
        const db = wx.cloud.database();
        db.collection('tests').get().then(res => {
            // res.data 包含该记录的数据
            console.log(res.data)
        })
    }
});
