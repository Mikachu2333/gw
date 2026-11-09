# TextFrame.HasText

如果指定的形状有相关的文字，则该属性值为 **msoTrue** 。 **Long** 类型，只读。



## 语法

express.**HasText**

express   一个代表 **TextFrame** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例判断如果活动文档的第一个形状的文本框架包含文本，则通知用户。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame
    if (textFrame.HasText == msoTrue) {
        alert("The text frame contains text.")
    }
}
```


```JavaScript
/*本示例显示所选形状的文本框架是否包含文本。*/
function test() {
    alert(Selection.ShapeRange.TextFrame.HasText === msoTrue)
}
```
