# TextFrame.AutoSize

返回或设置一个 **Long** 类型的值，该值代表是否自动调整文本框的大小。可读写。



## 语法

express.**AutoSize**

express   一个代表 **TextFrame** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档的第一个形状中文本框是否自动调整大小。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame
    alert(textFrame.AutoSize === msoTrue)
}
```


```JavaScript
/*本示例设置所选形状中文本框自动调整大小。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    textFrame.AutoSize = msoTrue
}
```
