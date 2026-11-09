# OMath.Functions

返回一个 **[OMathFunctions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathFunctions/obj)** 集合，该集合代表公式中包含的函数。只读。



## 语法

express.**Functions**

express   一个代表 **OMath** 对象的变量。

## 类型

OMathFunctions

## 示例


```JavaScript
/*本示例显示活动文档上第一个公式中包含的函数的数量。*/
function test() {
    alert(ActiveDocument.OMaths.Item(1).Functions.Count)
}
```


```JavaScript
/*本示例显示第一个文档上第二个公式中包含的第一个函数的类型是否为wdOMathFunctionScrSup。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    alert(oMath.Functions.Item(1).Type == wdOMathFunctionScrSup)
}
```
