# Range.End

返回或设置某区域中结束字符的位置。可读/写 **Long** 类型。



## 语法

express.**End**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 说明


 **Range** 对象均包含开始位置和结束位置。结束位置是距文档开头部分最远的点。如果该属性的设置值小于 **Start** 属性值，则 **Start** 属性将设为同一值（即 **Start** 与 **End** 属性值相等）。

该属性返回结束字符相对于文档开头部分的位置。文档主体部分（ **wdMainTextStory** ）的起始字符位置为 0（零）。设置该属性可以改变选定内容、区域或者书签的大小。



## 示例


```JavaScript
/*本示例将 range 的结束位置移动一个字符。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
    range.End -= 1
}
```


```JavaScript
/*本示例显示所选内容的结束字符的位置。*/
function test() {
    alert(Selection.Range.End)
}
```
