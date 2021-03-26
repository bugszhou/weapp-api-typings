# 需要覆盖的 interface

## 删除 interface

### index.d.ts

```javascript
declare const console: WechatMiniprogram.Console
```

## Component - `(lib.wx.component.d.ts)`

```javascript
type Options<
        TData extends DataOption,
        TProperty extends PropertyOption,
        TMethod extends MethodOption,
        TCustomInstanceProperty extends IAnyObject = {},
        TIsPage extends boolean = false
    > = Partial<Data<TData>> &
        Partial<Property<TProperty>> &
        Partial<Method<TMethod, TIsPage>> &
        Partial<OtherOption> &
        Partial<Lifetimes> &
+        Partial<TCustomInstanceProperty> &
        ThisType<
            Instance<
                TData,
                TProperty,
                TMethod,
                TCustomInstanceProperty,
                TIsPage
            >
        >
```

## ShowLoadingOption - `(lib.wx.api.d.ts)`

```javascript
    interface ShowLoadingOption {
        /** 提示的内容 */
+        title?: string
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?: ShowLoadingCompleteCallback
        /** 接口调用失败的回调函数 */
        fail?: ShowLoadingFailCallback
        /** 是否显示透明蒙层，防止触摸穿透 */
        mask?: boolean
        /** 接口调用成功的回调函数 */
        success?: ShowLoadingSuccessCallback
    }
```
