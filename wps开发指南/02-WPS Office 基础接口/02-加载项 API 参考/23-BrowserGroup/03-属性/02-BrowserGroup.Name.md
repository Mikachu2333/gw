# BrowserGroup.Name

分组的名称。

## 语法

express.**Name**

express   一个代表 **BrowserGroup** 对象的变量。

## 类型

string | undefined，只读。

## 说明

当分组内没有浏览器时返回 `undefined`。

## 示例

```javascript
/* 获取分组名称 */
function test() {
  var name = Application.BrowserGroups.Item(1).Name
  console.log("分组名称：" + name)
}
```
