# FillFormat.Visible

如果指定对象或应用于该对象的格式是可见的，则为 **msoTrue** 。可读/写 **MsoTriState** 。



## 语法

express.**Visible**

express   一个代表 **FillFormat** 对象的变量。

## 类型

MsoTriState

## 说明


对于任何对象，如果 **Visible** 属性为 **msoFalse** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例将活动文档中第二个形状的填充设置为不可见。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.Item(2).Fill
    fillFormat.Visible = msoFalse
}
```


```JavaScript
/*本示例显示第一个文档中第一个形状的填充是否可见。*/
function test() {
    let fillFormat = Application.Documents.Item(1).Shapes.Item(1).Fill
    alert(fillFormat.Visible == msoTrue)
}
```
