# OMath.Justification

返回或设置一个 **[WdOMathJc](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdOMathJc)** ，代表公式的对齐方式。可读写。



## 语法

express.**Justification**

express   一个代表 **OMath** 对象的变量。

## 类型

WdOMathJc

## 示例


```JavaScript
/*本示例显示活动文档上第一个公式的对齐方式是否为wdOMathJcCenterGroup。*/
function test() {
    let oMath = ActiveDocument.OMaths.Item(1)
    alert(oMath.Justification == wdOMathJcCenterGroup)
}
```


```JavaScript
/*本示例将第一个文档上第二个公式的对齐方式设置为wdOMathJcLeft。*/
function test() {
    let oMath = Documents.Item(1).OMaths.Item(2)
    oMath.Justification = wdOMathJcLeft
}
```
