# OMathFunction.Type

返回一个代表函数类型的 **[WdOMathFunctionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOMathFunctionType)** 常量。只读。



## 语法

express.**Type**

express   一个代表 **OMathFunction** 对象的变量。

## 类型

WdOMathFunctionType

## 示例


```JavaScript
/*本示例显示第一个文档上第二个公式中包含的第一个函数的类型是否为wdOMathFunctionScrSup。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    alert(oMath.Functions.Item(1).Type == wdOMathFunctionScrSup)
}
```


```JavaScript
/*本示例判断如果活动文档上第一个公式中第一个函数的类型为wdOMathFunctionText，则通知用户。*/
function test() {
    let oMathFunction = ActiveDocument.OMaths.Item(1).Functions.Item(1)
    if (oMathFunction.Type == wdOMathFunctionText) {
        alert("函数类型为公式文本")
    }
}
```
