# Paragraph.DropCap

返回一个 **DropCap** 对象，该对象代表指定段落中格式为首字下沉的大写字母。只读。



## 语法

express.**DropCap**

express   一个代表 **Paragraph** 对象的变量。

## 类型

DropCap

## 示例


```JavaScript
/*本示例为活动文档首段设置首字下沉。*/
function test() {
    let dropcap = ActiveDocument.Paragraphs.Item(1).DropCap
    dropcap.FontName = "Arial"
    dropcap.Position = wdDropNormal
    dropcap.LinesToDrop = 3
    dropcap.DistanceFromText = InchesToPoints(0.1)
}
```


```JavaScript
/*本示例为包含特定关键词的段落设置首字下沉，比如关键字为'Test 2'*/
function test() {
    let keyword = 'Test 2'
    for (let i = 1; i <= ActiveDocument.Paragraphs.Count; i++) {
        let paragraph = ActiveDocument.Paragraphs.Item(i)
        if (paragraph.Range.Text.includes(keyword)) {
            paragraph.DropCap.Style = wdDropNormal
            paragraph.DropCap.Position = wdDropMargin
            paragraph.DropCap.LinesToDrop = 2
            paragraph.DropCap.DistanceFromText = 0.1
        }
    }
}
```
