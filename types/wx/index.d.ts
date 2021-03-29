// Type definitions for non-npm package Wechat Mini Program - wechat-miniprogram 3.3
// Project: https://developers.weixin.qq.com/miniprogram/dev/api/
// Definitions by: Wechat Miniprogram <https://github.com/wechat-miniprogram>,
//                SgLy <https://github.com/SgLy>,
//                TtTRz <https://github.com/TtTRz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

/// <reference path="./lib.wx.app.d.ts" />
/// <reference path="./lib.wx.page.d.ts" />
/// <reference path="./lib.wx.api.d.ts" />
/// <reference path="./lib.wx.cloud.d.ts" />
/// <reference path="./lib.wx.component.d.ts" />
/// <reference path="./lib.wx.behavior.d.ts" />
/// <reference path="./lib.wx.event.d.ts" />

declare namespace WechatMiniprogram {
  type IAnyObject = Record<string, any>;
  type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F;
  type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> };
  interface AsyncMethodOptionLike {
    success?: (...args: any[]) => void;
  }
  type PromisifySuccessResult<P, T extends AsyncMethodOptionLike> = P extends {
    success: any;
  }
    ? void
    : P extends { fail: any }
    ? void
    : P extends { complete: any }
    ? void
    : Promise<Parameters<Exclude<T["success"], undefined>>[0]>;
}

declare const wx: WechatMiniprogram.Wx;
/** 引入插件。返回插件通过 `main` 暴露的接口。 */
declare function requirePlugin(
  /** 需要引入的插件的 alias */
  module: string,
): any;
/** 插件引入当前使用者小程序。返回使用者小程序通过 [插件配置中 `export` 暴露的接口](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html#%E5%AF%BC%E5%87%BA%E5%88%B0%E6%8F%92%E4%BB%B6)。
 *
 * 该接口只在插件中存在
 *
 * 最低基础库： `2.11.1` */
declare function requireMiniProgram(): any;
