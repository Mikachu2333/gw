# OMathScrSup.Sup

返回一个 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象，该对象代表上标对象的上标。只读。



## 语法

express.**Sup**

express   一个代表 **OMathScrSup** 对象的变量。

## 类型

OMath

## 示例


```JavaScript
/*本示例显示第一个文档上第一个公式中第一个函数上标部分的文本。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(1)
    alert(oMath.Functions.Item(1).ScrSup.Sup.Range.Text)
}
```


```JavaScript
/*本示例设置活动文档上第一个公式中第一个函数的上标部分的展示格式类型为wdOMathDisplay。*/
function test() {
    let oMathFunction = ActiveDocument.OMaths.Item(1).Functions.Item(1)
    oMathFunction.ScrSup.Sup.Type = wdOMathDisplay
}
```
