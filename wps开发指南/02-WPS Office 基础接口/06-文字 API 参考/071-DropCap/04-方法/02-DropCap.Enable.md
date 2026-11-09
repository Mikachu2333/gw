# DropCap.Enable

将指定段落的第一个字母设置为首字下沉格式。



## 语法

express.**Enable()**

express   一个代表 **DropCap** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将所选内容的第一段设置为首字下沉格式。*/
function test() {
    let dropcap = Selection.Paragraphs.Item(1).DropCap
    dropcap.Enable()
    dropcap.LinesToDrop = 2
    dropcap.FontName = "Arial"
}
```


```JavaScript
/*本示例将活动文档的第三段设置为首字下沉格式。*/
function test() {
    let dropcap = ActiveDocument.Paragraphs.Item(3).DropCap
    dropcap.Position = wdDropNormal
    dropcap.LinesToDrop = 4
    dropcap.Enable()
}
```
