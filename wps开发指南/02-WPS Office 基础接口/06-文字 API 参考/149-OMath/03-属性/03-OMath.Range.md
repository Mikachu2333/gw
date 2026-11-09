# OMath.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表包含在指定对象中的文档部分。只读。



## 语法

express.**Range**

express   一个代表 **OMath** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例显示活动文档上第一个公式的文档部分的文本。*/
function test() {
    let oMath = ActiveDocument.OMaths.Item(1)
    alert(oMath.Range.Text)
}
```


```JavaScript
/*本示例将第一个文档上第二个公式的文档部分的字体格式设置为加粗。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    oMath.Range.Bold = true
}
```
