# Document.JustificationMode

返回或设置指定文档字符间距的调整量。可读/写 **[WdJustificationMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdJustificationMode)** 类型。



## 语法

express.**JustificationMode**

express   一个代表 **Document** 对象的变量。

## 类型

WdJustificationMode

## 示例


```JavaScript
/*本示例设置活动文档在调整字符间距时只压缩标点符号。*/
function test() {
    ActiveDocument.JustificationMode = wdJustificationModeCompressKana
}
```


```JavaScript
/*本示例显示第一个文档的字符间距调整是否为wdJustificationModeCompress。*/
function test() {
    alert(Documents.Item(1).JustificationMode == wdJustificationModeCompress)
}
```
