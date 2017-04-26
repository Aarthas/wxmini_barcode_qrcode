function rpx2px(rpx) {
    var res = wx.getSystemInfoSync();
    return res.windowWidth / 750  * rpx;
}
module.exports = {
    rpx2px: rpx2px,
}
