# Endnote.Range

返回一个 **Range** 对象，该对象表示指定对象中包含的文档部分。



## 语法

express.**Range**

express   一个代表 **Endnote** 对象的变量。

## 类型

Range

## 说明


有关从文档返回一个区域或从形状集合返回形状区域的信息，请参阅 **Range** 方法。



## 示例


```JavaScript
/*本示例更改活动文档中第一个尾注的文本。*/
function test() {
    let range = Application.ActiveDocument.Endnotes.Item(1).Range
    range.Delete()
    range.Text = "new endnote text"
}
```


```JavaScript
/*本示例将所选内容中第二个尾注的文档部分的文本设置为加粗格式。*/
function test() {
    let endnote = Selection.Endnotes.Item(2)
    endnote.Range.Bold = true
}
```
