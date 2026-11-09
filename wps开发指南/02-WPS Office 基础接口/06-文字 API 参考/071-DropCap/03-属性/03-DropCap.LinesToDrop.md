# DropCap.LinesToDrop

返回或设置指定首字下沉字母的高度，以行为单位。 **Long** 类型，可读写。



## 语法

express.**LinesToDrop**

express   一个代表 **DropCap** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将活动文档中的第一个段落设置为首字下沉，高度为三行。*/
function test() {
    let dropCap = ActiveDocument.Paragraphs.Item(1).DropCap
    dropCap.Enable()
    dropCap.Position = wdDropNormal
    dropCap.LinesToDrop = 3
}
```


```JavaScript
/*本示例显示所选内容的第一段的首字下沉字母的高度。*/
function test() {
    let dropcap = Selection.Paragraphs.Item(1).DropCap
    alert(dropcap.LinesToDrop + "行")
}
```
