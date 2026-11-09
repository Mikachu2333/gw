# OMathFunction.ScrSup

返回一个代表数学上标函数的 **[OMathScrSup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathScrSup/obj)** 对象。只读。



## 语法

express.**ScrSup**

express   一个代表 **OMathFunction** 对象的变量。

## 类型

OMathScrSup

## 示例


```JavaScript
/*本示例显示第一个文档上第一个公式中第一个函数上标部分的文本。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(1)
    alert(oMath.Functions.Item(1).ScrSup.Sup.Range.Text)
}
```


```JavaScript
/*本示例显示活动文档上第一个公式中第一个函数的上标的基类的展示格式类型是否为wdOMathDisplay。*/
function test() {
    let oMathFunction = ActiveDocument.OMaths.Item(1).Functions.Item(1)
    alert(oMathFunction.ScrSup.E.Type == wdOMathDisplay)
}
```
