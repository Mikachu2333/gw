# OMathFunctions 对象

代表 WPS 所支持的函数或结构（如分数、积分、和以及根）的集合。


## 示例


```JavaScript
/*本示例显示活动文档上第二个公式中包含的函数的数量。*/
function test() {
    let functions = ActiveDocument.OMaths.Item(2).Functions
    alert(`函数的数量：${functions.Count}`)
}
```


```JavaScript
/*本示例显示第一个文档上第一个公式中包含的第二个函数的类型是否为wdOMathFunctionFrac。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(1)
    alert(oMath.Functions.Item(2).Type == wdOMathFunctionFrac)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathFunctions/member/Add) | 在公式中的指定位置插入一个新结构（如分数），并且返回代表该结构的 **OMathFunction** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathFunctions/member/Item) | 返回 **OMathFunction** 对象，该对象表示集合中的指定项。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMathFunctions/member/Count) | 返回 **OMathFunctions** 集合中的项目数。只读 **Long** 类型。 |