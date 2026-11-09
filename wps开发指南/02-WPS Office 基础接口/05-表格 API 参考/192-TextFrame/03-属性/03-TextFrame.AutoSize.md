# TextFrame.AutoSize

如果指定对象能自动调整大小，以适应其中所包含的文字，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoSize**

express   一个代表 **TextFrame** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使第一个形状的文本框能自动调整大小，以适应其中所包含的文字。*/
function test() {
    Application.Worksheets.Item(1).Shapes.Item(1).TextFrame.AutoSize = true
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状的文本框是否能自动调整大小，以适应其中所包含的文字。*/
function test() {
    let textFrame = ActiveSheet.Shapes.Item(2).TextFrame
    alert(textFrame.AutoSize)
}
```
