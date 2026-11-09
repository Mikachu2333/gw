# Paragraphs.AddSpaceBetweenFarEastAndAlpha

如果 WPS 将自动在指定段落的日文和拉丁文文字之间添加空格，则该属性值为 **msoTrue** 。如果仅对于某些指定段落将该属性设置为 **msoTrue** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。



## 语法

express.**AddSpaceBetweenFarEastAndAlpha**

express   一个代表 **Paragraphs** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例设置 WPS 在活动文档所有段的日文文字和拉丁文字之间自动添加空格。*/
function test() {
    ActiveDocument.Paragraphs.AddSpaceBetweenFarEastAndAlpha = msoTrue
}
```


```JavaScript
/*本示例取消 WPS 在所选段落的日文文字和拉丁文字之间自动添加空格。*/
function test() {
    Selection.Paragraphs.AddSpaceBetweenFarEastAndAlpha = msoFalse
}
```
