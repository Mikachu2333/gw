# WPSAddin.Functions

该加载项注册的自定义函数集合。

## 语法

express.**Functions**

express   一个代表 **WPSAddin** 对象的变量。

## 类型

AddinFunctions | undefined，只读。

## 说明

如果加载项未注册任何函数，返回 `undefined`。

## 示例

```javascript
/* 访问加载项的函数集合 */
function test() {
  var addin = Application.CurrentWPSAddIn
  var funcs = addin.Functions
  if (funcs) {
    for (var i = 1; i <= funcs.Count; i++) {
      console.log(funcs.Item(i).Name)
    }
  }
}
```
