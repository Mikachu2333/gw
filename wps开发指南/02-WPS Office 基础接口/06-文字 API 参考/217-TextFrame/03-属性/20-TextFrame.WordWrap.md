# TextFrame.WordWrap

如果 WPS 在指定文本框架的西文单词中间断字换行，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。



## 语法

express.**WordWrap**

express   一个代表 **TextFrame** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果该属性对指定文本框架中的某些指定文本设置为 **msoTrue** 而对其他文本设置为 **msoFalse** ，则该属性返回 **wdUndefined** 。

根据您所选择或安装的语言支持（例如，美国英语），该属性可能不可用。



## 示例


```JavaScript
/*本示例设置 WPS 未在所选形状的文本框的西文单词中间断字换行。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    textFrame.WordWrap = msoFalse
}
```


```JavaScript
/*本示例显示 WPS 是否在活动文档上第一个形状的文本框架的西文单词中间断字换行。*/
function test() {
    let textFrame = ActiveDocument.Shapes.Item(1).TextFrame
    alert(textFrame.WordWrap === msoTrue)
}
```
