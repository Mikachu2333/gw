# TaskPane.Visible

如果指定对象可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **TaskPane** 对象的变量。

## 类型

boolean

## 说明


对于任何对象，如果其 **Visible** 属性值为 **False** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例将格式窗格设置为可见。*/
function test() {
    Application.TaskPanes.Item(wdTaskPaneFormatting).Visible = true
}
```


```JavaScript
/*本示例显示文档保护窗格是否可见。*/
function test() {
    alert(Application.TaskPanes.Item(wdTaskPaneDocumentProtection).Visible)
}
```
