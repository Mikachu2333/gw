# OMathScrSup 对象

代表一个公式，该公式带有包含上标的基线。


## 示例


```JavaScript
/*本示例显示第一个文档上第一个公式中第一个函数的上标和上标基类的文本内容。*/
function test() {
    let oMathScrSup = Documents.Item(1).OMaths.Item(1).Functions.Item(1).ScrSup
    alert(oMathScrSup.E.Range.Text + "\n" + oMathScrSup.Sup.Range.Text)
}
```


```JavaScript
/*本示例将第一个文档上第一个公式中所有上标函数的上标的字体格式设置加粗。*/
function test() {
    let functions = Documents.Item(1).OMaths.Item(1).Functions
    for (let i = 1; i <= functions.Count; i++) {
        if (functions.Item(i).Type == wdOMathFunctionScrSup) {
            functions.Item(i).ScrSup.Sup.Range.Bold = true
        }
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [E](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathScrSup/member/E) | 返回一个 **OMath** 对象，该对象代表指定公式对象的基对象。只读。 |
| [Sup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathScrSup/member/Sup) | 返回一个 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象，该对象代表上标对象的上标。只读。 |