// pages/login/login.js
var p = "";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        disabled: "true",
        btnstate: "default",
        account: "",
        password: ""
    },
    accountInput(e) {
        var content = e.detail.value;
        console.log(content);
        if (content != "") {
            this.setData({disabled: false, btnstate: "primary", account: content})
        } else {
            this.setData({disabled: true, btnstate: "default"})
        }
    },

    pwdBlur(e) {
        var password = e.detail.value;
        p = e.detail.value;
        console.log(password);
        if (password != "") {
            this.setData({password: password});
        }
    },
    login:function(e){
        console.log(p);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    }

    ,

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    }
    ,

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    }
    ,

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    }
    ,

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})