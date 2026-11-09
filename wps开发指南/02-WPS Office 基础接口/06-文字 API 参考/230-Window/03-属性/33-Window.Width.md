# Window.Width

返回或设置指定文档窗口的宽度（以磅为单位）。可读写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **Window** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动窗口的宽度。*/
function test() {
    alert(ActiveDocument.ActiveWindow.Width)
}
```


```JavaScript
/*本示例将第一个窗口的宽度设置为 300 磅。*/
function test() {
    Windows.Item(1).Width = 300
}
```
