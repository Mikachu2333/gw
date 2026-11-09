# OMathFunction 对象

代表 WPS文字 所支持的数学函数或结构，如分数、积分、和以及根。 **OMathFunction** 对象是 **OMathFunctions** 集合的成员。


## 示例


```JavaScript
/*本示例判断如果第一个文档上第一个公式中函数的类型为wdOMathFunctionScrSup，则通知用户。*/
function test() {
    let oMathFunctions = Documents.Item(1).OMaths.Item(1).Functions
    for (let i = 1; i <= oMathFunctions.Count; i++) {
        if (oMathFunctions.Item(i).Type == wdOMathFunctionScrSup) {
            alert(`第${i}个函数的类型为wdOMathFunctionScrSup`)
        }
    }
}
```


```JavaScript
/*本示例将第一个文档上第二个公式中第一个函数上标部分的文本格式设置为加粗。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    oMath.Functions.Item(1).ScrSup.Sup.Range.Bold = true
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ScrSup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathFunction/member/ScrSup) | 返回一个代表数学上标函数的 **[OMathScrSup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathScrSup/obj)** 对象。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathFunction/member/Type) | 返回一个代表函数类型的 **[WdOMathFunctionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOMathFunctionType)** 常量。只读。 |