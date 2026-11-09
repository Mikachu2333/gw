# Windows.Item

根据索引获取指定窗口对象。

## 语法

express.**Item**

express   一个代表 **Windows** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Index | number | 窗口索引（从 1 开始） |

## 返回值

`Window` — 窗口对象

## 示例

```JavaScript
var win = app.Windows.Item(1);
console.log("窗口标题: " + win.Caption);
```
