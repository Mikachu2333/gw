# Window.Top

返回或设置指定文档窗口的垂直位置（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Top**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口的垂直位置。*/
function test() {
    alert(ActiveWindow.Top)
}
```

```JavaScript
/*本示例将第一个窗口的垂直位置设置为 100 磅。*/
function test() {
    Windows.Item(1).Top = 100
}
```
