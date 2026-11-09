# BrowserGroup.Count

该分组中的浏览器数量。

## 语法

express.**Count**

express   一个代表 **BrowserGroup** 对象的变量。

## 类型

number，只读。

## 示例

```javascript
/* 获取分组内浏览器数量 */
function test() {
  var count = Application.BrowserGroups.Item(1).Count
  console.log("浏览器数量：" + count)
}
```
