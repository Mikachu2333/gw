# Browser.WebLoadFinish

通知浏览器网页内容加载完毕；可选传入回调函数供宿主在加载完成链路中调用。

## 语法

```typescript
WebLoadFinish(callback?: Function): void
```

express   一个代表 **Browser** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| callback | 可选 | Function | 页面加载完成后执行的回调函数。 |

## 说明

调用时若传入回调函数则注册该回调，并立即通知宿主页面加载完毕；回调由宿主在加载完成通知链中主动取用，不会在每次页面导航或自然加载完成时自动调用。不传参数或传入 `null` 时不会更新已注册的回调，也不会清除先前注册的回调。

## 示例

```javascript
/* 监听页面加载完成 */
function test() {
  Application.ThisBrowser.WebLoadFinish(function() {
    console.log("页面加载完成")
  })
}
```
