declare namespace WechatMiniprogram {
  interface ShowLoadingOption {
    /** 提示的内容 */
    title?: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: ShowLoadingCompleteCallback;
    /** 接口调用失败的回调函数 */
    fail?: ShowLoadingFailCallback;
    /** 是否显示透明蒙层，防止触摸穿透 */
    mask?: boolean;
    /** 接口调用成功的回调函数 */
    success?: ShowLoadingSuccessCallback;
  }

  interface OpenOfflinePayViewOption {
    /** 公众平台 appid */
    appId: string;
    /** 随机字符串，长度为32个字符以下 */
    nonceStr: string;
    /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** */
    package: string;
    /** 签名，具体签名方案参见 [小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3) */
    paySign: string;
    /** 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间 */
    timeStamp: string;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?: any;
    /** 接口调用失败的回调函数 */
    fail?: any;
    /** 签名算法
     *
     * 可选值：
     * - 'MD5': MD5;
     * - 'HMAC-SHA256': HMAC-SHA256; */
    signType?: "MD5" | "HMAC-SHA256";
    /** 接口调用成功的回调函数 */
    success?: any;
  }

  interface Wx {
    /** [wx.openOfflinePayView(Object object)]
    *
    * 打开微信付款码页面，接口未对外公开，需要找微信支付团队申请开通权限
    *
    * **示例代码**
    *
    *
    * ```js
    wx.openOfflinePayView({
      appId: '',
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success (res) { },
      fail (err) { }
    })
    ``` */
    openOfflinePayView<TOption extends OpenOfflinePayViewOption>(
      option: TOption,
    ): PromisifySuccessResult<TOption, OpenOfflinePayViewOption>;

    /** [wx.showLoading(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)
      *
      * 需要基础库： `1.1.0`
      *
      * 在插件中使用：需要基础库 `1.9.6`
      *
      * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
      *
      * **示例代码**
      *
      * ```js
      wx.showLoading({
        title: '加载中',
      })

      setTimeout(function () {
        wx.hideLoading()
      }, 2000)
      ```
      *
      * **注意**
      *
      * - [wx.showLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html) 和 [wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html) 同时只能显示一个
      * - [wx.showLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html) 应与 [wx.hideLoading](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html) 配对使用 
    */
    showLoading<T extends ShowLoadingOption = ShowLoadingOption>(
      option?: T,
    ): PromisifySuccessResult<T, ShowLoadingOption>;
  }
}
