# WPSAddin.Name

加载项的名称。

## 语法

express.**Name**

express   一个代表 **WPSAddin** 对象的变量。

## 类型

string，只读。

## 示例

```javascript
/* 获取加载项名称 */
function test() {
  var addin = Application.CurrentWPSAddIn
  console.log(addin.Name)
}
```
