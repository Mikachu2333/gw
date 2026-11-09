# Document.OMaths

返回一个 **[OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/obj)** 集合，该集合代表指定区域内的 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象。只读。



## 语法

express.**OMaths**

express   一个代表 **Document** 对象的变量。

## 类型

OMaths

## 示例


```JavaScript
/*本示例将一个公式插入到活动文档中的新段落中。*/
function test() {
    let range = ActiveDocument.Paragraphs.Add().Range
    range.Text = "a + b = c"
    range.Select()
    ActiveDocument.OMaths.Add(range)
}
```


```JavaScript
/*本示例显示第一个文档上第二个公式的对齐方式是否为wdOMathJcInline。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    alert(oMath.Justification == wdOMathJcInline)
}
```
