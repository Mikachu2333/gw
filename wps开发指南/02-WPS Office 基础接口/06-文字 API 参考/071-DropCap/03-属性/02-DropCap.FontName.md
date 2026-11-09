# DropCap.FontName

返回或设置一个 **String** 类型的值，该值代表首字下沉字母的字体名称。可读写。



## 语法

express.**FontName**

express   一个代表 **DropCap** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动文档首段的首字下沉字体设为 Arial。*/
function test() {
    let dropCap = ActiveDocument.Paragraphs.Item(1).DropCap
    dropCap.FontName = "Arial"
    dropCap.Position = wdDropNormal
    dropCap.LinesToDrop = 3
    dropCap.DistanceFromText = InchesToPoints(0.1)
}
```


```JavaScript
/*本示例显示所选内容的第一段的首字下沉字母的字体名称。*/
function test() {
    let dropcap = Selection.Paragraphs.Item(1).DropCap
    alert(dropcap.FontName)
}
```
