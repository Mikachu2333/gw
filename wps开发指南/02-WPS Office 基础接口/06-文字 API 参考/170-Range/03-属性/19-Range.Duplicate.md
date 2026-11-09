# Range.Duplicate

返回一个只读 **Range** 对象，该对象代表指定区域的所有属性。



## 语法

express.**Duplicate**

express   一个代表 **Range** 对象的变量。

## 类型

Range

## 说明


通过复制 **Range** 对象，可更改所复制的区域的开始或结尾字符的位置，而不会更改源区域。



## 示例


```JavaScript
/*本示例复制活动文档的第一个段落的所有属性，然后设置所选内容的粗体格式与第一个段落的粗体格式相同。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range.Duplicate
    Selection.Range.Bold = range.Bold
}
```


```JavaScript
/*本示例复制所选内容的所有属性，并将其中的字体颜色设置为红色，然后将字体属性应用于活动文档的第一个段落。*/
function test() {
    let range = Selection.Range.Duplicate
    range.Font.Color = wdColorRed
    ActiveDocument.Paragraphs.Item(1).Range.Font = range.Font
}
```
