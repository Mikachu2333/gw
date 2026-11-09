# Field.Type

返回域的类型。只读 **[WdFieldType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFieldType)** 类型。



## 语法

express.**Type**

express   一个代表 **Field** 对象的变量。

## 类型

WdFieldType

## 示例


```JavaScript
/*本示例显示所选内容中第一个域的类型是否为wdFieldIncludeText。*/
function test() {
    alert(Selection.Fields.Item(1).Type == wdFieldIncludeText)
}
```


```JavaScript
/*本示例判断活动文档上第一个域的类型是否为Data域，并通知用户。*/
function test() {
    let field = ActiveDocument.Fields.Item(1)
    if (field.Type == wdFieldData) {
        alert("第一个域为Data域")
    } else {
        alert("第一个域不为Data域")
    }
}
```
