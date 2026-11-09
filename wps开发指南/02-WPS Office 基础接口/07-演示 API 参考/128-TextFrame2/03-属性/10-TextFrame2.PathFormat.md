# TextFrame2.PathFormat

返回或设置指定文本框的路径类型。可读/写。



## 语法

express.**PathFormat**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

MsoPathFormat

## 说明


 **PathFormat** 属性的值可以是下列 **MsoPathFormat** 常量之一。无法设置值 **msoPathTypeMixed** 。设置值 **msoPathTypeNone** 将删除所有现有路径。

| 常量 |
| --- |
| **msoPathType1** |
| **msoPathType2** |
| **msoPathType3** |
| **msoPathType4** |
| **msoPathTypeMixed** |
| **msoPathTypeNone** |



## 示例


```JavaScript
/*本示例将活动窗口选定的第一个形状文本框的路径类型设置为msoPathType1。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    shape.TextFrame2.PathFormat = msoPathType1
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的标题文本框的路径类型是否为msoPathType4。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    alert(shapes.Title.TextFrame2.PathFormat == msoPathType4)
}
```
