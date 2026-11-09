# DropCap.DistanceFromText

返回或设置一个 **Single** 类型的值，该值代表首字下沉的字母和段落正文之间的距离（以磅为单位）。可读写。



## 语法

express.**DistanceFromText**

express   一个代表 **DropCap** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例为活动文档首段设置首字下沉，并设置首字距正文为 12 磅。*/
function test() {
    let dropcap = ActiveDocument.Paragraphs.Item(1).DropCap
    dropcap.FontName = "Arial"
    dropcap.Position = wdDropNormal
    dropcap.DistanceFromText = 12
}
```


```JavaScript
/*此示例显示所选内容中第一个段落的首字下沉字母和段落正文之间的距离。*/
function test() {
    let dropCap = Selection.Paragraphs.Item(1).DropCap
    alert(dropCap.DistanceFromText)
}
```
