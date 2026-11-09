# LinkFormat.SourceFullName

返回或设置指定的链接 OLE 对象、图片或域的源文件的路径和名称。 **String** 类型，可读写。



## 语法

express.**SourceFullName**

express   一个代表 **LinkFormat** 对象的变量。

## 类型

string

## 说明


使用该属性等同于依次使用 **[SourcePath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SourcePath)** 、 **[PathSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PathSeparator)** 和 **[SourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SourceName)** 属性。



## 示例


```JavaScript
/*本示例将 example.xlsx 设置为活动文档中第一个形状的源文件。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    if (shape.Type == msoLinkedOLEObject) {
        let linkFormat = shape.LinkFormat
        linkFormat.SourceFullName = "E:\\example.xlsx"
    }
}
```


```JavaScript
/*本示例显示活动文档中第二个链接 OLE 对象源文件的路径和名称。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(2)
    alert(shape.LinkFormat.SourceFullName)
}
```
