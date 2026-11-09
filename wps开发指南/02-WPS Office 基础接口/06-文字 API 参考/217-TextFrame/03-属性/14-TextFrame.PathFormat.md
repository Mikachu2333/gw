# TextFrame.PathFormat

返回或设置指定文本框架的路径类型。可读/写 **MsoPathFormat** 。



## 语法

express.**PathFormat**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoPathFormat

## 说明


 **PathFormat** 属性的值可以是下列 **MsoPathFormat** 常量之一：

* msoPathType1
* msoPathType2
* msoPathType3
* msoPathType4
* msoPathTypeMixed
* msoPathTypeNone

无法设置值 **msoPathTypeMixed** 。如果设置值 **msoPathTypeNone** ，则会删除所有现有路径。



## 示例


```JavaScript
/*本示例设置活动文档的第一个形状中文本框架的路径类型。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame
    textFrame.PathFormat = msoPathType4
}
```


```JavaScript
/*本示例显示所选形状中文本框架的路径类型是否为msoPathTypeNone。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    alert(textFrame.PathFormat == msoPathTypeNone)
}
```
