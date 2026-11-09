# Application.BrowserWindow

当前浏览器页面关联的窗口对象。

## 语法

express.**BrowserWindow**

express   一个代表 **Application** 对象的变量。

## 类型

BrowserWindow，只读。

## 说明

返回 [BrowserWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/obj) 对象，可用于控制当前加载项浏览器窗口的标题栏拖拽区域、阴影、可见性等属性。

## 示例

```javascript
/* 获取窗口对象 */
function test() {
  var bw = Application.BrowserWindow
  bw.Visible = true
}
```
