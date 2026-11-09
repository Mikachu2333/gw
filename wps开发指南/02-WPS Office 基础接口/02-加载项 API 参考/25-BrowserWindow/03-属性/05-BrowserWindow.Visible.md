# BrowserWindow.Visible

窗口是否可见。

## 语法

express.**Visible**

express   一个代表 **BrowserWindow** 对象的变量。

## 类型

boolean，可读写。

## 示例

```javascript
/* 隐藏窗口 */
function test() {
  var bw = Application.BrowserWindow
  bw.Visible = false
}
```
