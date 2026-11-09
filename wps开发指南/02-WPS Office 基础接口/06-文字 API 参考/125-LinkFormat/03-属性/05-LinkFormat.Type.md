# LinkFormat.Type

返回链接的类型。只读 **[WdLinkType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLinkType)** 类型。



## 语法

express.**Type**

express   一个代表 **LinkFormat** 对象的变量。

## 类型

WdLinkType

## 示例


```JavaScript
/*本示例判断活动文档第一个形状链接的类型是否为图片，并通知用户。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    if (shape.LinkFormat.Type == wdLinkTypePicture) {
        alert("链接的类型为图片")
    } else {
        alert("链接的类型不为图片")
    }
}
```


```JavaScript
/*本示例显示第一个文档中第二个形状链接的类型是否为 OLE 对象。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(2)
    alert(shape.LinkFormat.Type == wdLinkTypeOLE)
}
```
