# Application.WPSAddIns

返回当前应用组件下已加载的 WPS 加载项（[WPSAddin](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddin/obj)）集合。

## 语法

express.**WPSAddIns**

express   一个代表 **Application** 对象的变量。

## 类型

WPSAddins，只读。

## 说明

返回 [WPSAddins](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddins/obj) 对象，可通过 `Count` 获取数量、通过 `Item` 按索引访问各个加载项。

## 示例

```javascript
/* 遍历所有加载项 */
function test() {
  var addins = Application.WPSAddIns
  for (var i = 1; i <= addins.Count; i++) {
    console.log(addins.Item(i).Name)
  }
}
```
