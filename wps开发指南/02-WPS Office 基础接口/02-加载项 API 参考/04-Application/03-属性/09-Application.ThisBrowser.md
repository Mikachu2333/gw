# Application.ThisBrowser

当前正在执行脚本的浏览器页面。

## 语法

express.**ThisBrowser**

express   一个代表 **Application** 对象的变量。

## 类型

Browser，只读。

## 说明

返回代表当前加载项浏览器页面的 [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/obj) 对象。每个加载项页面都有一个对应的 Browser 实例，可通过它访问页面 URL、名称、所属分组等信息。

## 示例

```javascript
/* 获取当前页面 URL */
function test() {
  var browser = Application.ThisBrowser
  console.log("当前URL：" + browser.Url)
}
```
