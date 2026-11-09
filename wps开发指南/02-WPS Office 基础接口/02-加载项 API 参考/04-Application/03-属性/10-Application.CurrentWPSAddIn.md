# Application.CurrentWPSAddIn

当前正在执行脚本的加载项。

## 语法

express.**CurrentWPSAddIn**

express   一个代表 **Application** 对象的变量。

## 类型

WPSAddin，只读。

## 说明

返回代表当前加载项的 [WPSAddin](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddin/obj) 对象，可通过它获取加载项名称和注册的自定义函数集合。

## 示例

```javascript
/* 获取当前加载项名称 */
function test() {
  var addin = Application.CurrentWPSAddIn
  console.log("当前加载项：" + addin.Name)
}
```
