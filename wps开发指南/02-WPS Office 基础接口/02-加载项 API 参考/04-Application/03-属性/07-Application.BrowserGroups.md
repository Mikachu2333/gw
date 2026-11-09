# Application.BrowserGroups

返回当前程序的所有 **BrowserGroup** 的集合。

## 语法

express.**BrowserGroups**

express   一个代表 **Application** 对象的变量。

## 类型

BrowserGroups，只读。

## 说明

返回 [BrowserGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroups/obj) 对象，可遍历当前程序中所有的浏览器分组。每个分组包含一组关联的浏览器页面。

## 示例

```javascript
/* 获取浏览器分组数量 */
function test() {
  var groups = Application.BrowserGroups
  console.log("分组数量：" + groups.Count)
}
```
