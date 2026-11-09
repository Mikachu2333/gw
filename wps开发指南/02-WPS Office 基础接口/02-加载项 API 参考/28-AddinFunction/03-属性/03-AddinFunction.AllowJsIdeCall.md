# AddinFunction.AllowJsIdeCall

是否允许宏编辑器调用此函数。

## 语法

express.**AllowJsIdeCall**

express   一个代表 **AddinFunction** 对象的变量。

## 类型

boolean，可读写。

## 说明

默认为 `false`。设为 `true` 后，宏编辑器中的代码可通过 [Call](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/member/Call) 调用此加载项函数。只有函数所属的加载项自身可以修改此属性，跨加载项修改时抛出异常。

## 示例

```javascript
/* 允许宏编辑器调用 */
function test() {
  var funcs = Application.CurrentWPSAddIn.Functions
  var f = funcs.Register("myFunc", function() { return 42 })
  f.AllowJsIdeCall = true
}
```
