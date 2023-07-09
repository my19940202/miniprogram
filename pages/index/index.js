// index.js
// const app = getApp()
Page({
    data: {
        imageList: [
            // 'cloud://cloud1-5g5eyjtze161c202.636c-cloud1-5g5eyjtze161c202-1319072486/static/family/images/poster1.jpg',
            // 'cloud://cloud1-5g5eyjtze161c202.636c-cloud1-5g5eyjtze161c202-1319072486/static/family/images/poster2.jpg',
            // 'cloud://cloud1-5g5eyjtze161c202.636c-cloud1-5g5eyjtze161c202-1319072486/static/family/images/poster3.jpg'
            'https://bj.bcebos.com/v1/aop-data-app-test/assets/imgs/poster1.jpg',
            'https://bj.bcebos.com/v1/aop-data-app-test/assets/imgs/poster2.jpg',
            'https://bj.bcebos.com/v1/aop-data-app-test/assets/imgs/poster3.jpg'
        ],
        daySinceLove: (Math.round((new Date() - new Date('2018-12-10'))) / 1000 / 3600 / 24).toFixed()
    },
});
