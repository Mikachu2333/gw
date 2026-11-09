# Browser.AllowPopup

是否允许浏览器打开弹出窗口。

## 语法

express.**AllowPopup**

express   一个代表 **Browser** 对象的变量。

## 类型

boolean，可读写。

## 示例

```javascript
/* 允许弹出窗口 */
function test() {
  Application.ThisBrowser.AllowPopup = true
}
```
