# BrowserWindow.ShadowColor

窗口阴影颜色。

## 语法

express.**ShadowColor**

express   一个代表 **BrowserWindow** 对象的变量。

## 类型

number，可读写。

## 说明

值为整数颜色编码（如 `0x333333`）。修改后立即更新阴影渲染。

## 示例

```javascript
/* 设置深灰色阴影 */
function test() {
  var bw = Application.BrowserWindow
  bw.ShadowColor = 0x333333
}
```
