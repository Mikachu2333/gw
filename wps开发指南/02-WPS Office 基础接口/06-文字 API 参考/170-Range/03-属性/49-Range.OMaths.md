# Range.OMaths

返回一个 **[OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/obj)** 集合，该集合代表指定区域内的 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象。只读。



## 语法

express.**OMaths**

express   一个代表 **Range** 对象的变量。

## 类型

OMaths

## 示例


```JavaScript
/*本示例将一个公式插入到活动文档的新段落中。*/
function test() {
    Selection.Text = "a + b = c"
    ActiveDocument.Paragraphs.Add().Range.OMaths.Add(Selection.Range)
}
```


```JavaScript
/*本示例显示第一个文档的主文档文章上第二个公式中包含的第一个函数的类型是否为wdOMathFunctionScrSup。*/
function test() {
    let oMath = Documents.Item(1).Content.OMaths.Item(2)
    alert(oMath.Functions.Item(1).Type == wdOMathFunctionScrSup)
}
```
