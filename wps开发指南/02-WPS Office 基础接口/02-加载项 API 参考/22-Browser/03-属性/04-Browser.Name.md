# Browser.Name

浏览器的名称。

## 语法

express.**Name**

express   一个代表 **Browser** 对象的变量。

## 类型

string，可读写。

## 说明

可读写。名称为空时读取会抛出异常。

## 示例

```javascript
/* 设置浏览器名称 */
function test() {
  Application.ThisBrowser.Name = "mainPanel"
}
```
