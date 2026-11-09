# LinkFormat.SourcePath

返回指定的链接 OLE 对象、图片或域的源文件的路径。 **String** 类型，只读。



## 语法

express.**SourcePath**

express   一个代表 **LinkFormat** 对象的变量。

## 类型

string

## 说明


路径中不包含尾部字符（例如，“C:\\KSOffice”）。使用 **[PathSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/member/PathSeparator)** 属性可添加分隔文件夹与驱动器号的字符。使用 **[SourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SourceName)** 属性可以返回不带路径的文件名，而使用 **[SourceFullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LinkFormat/member/SourceFullName)** 属性则可同时返回路径和文件名。



## 示例


```JavaScript
/*本示例显示活动文档中链接 OLE 对象的任何图形的源文件路径和名称。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == msoLinkedOLEObject) {
            alert(shapes.Item(i).LinkFormat.SourcePath + "\\" + shapes.Item(i).LinkFormat.SourceName)
        }
    }
}
```


```JavaScript
/*本示例显示活动文档中第二个 LinkFormat 对象源文件的路径。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(2)
    alert(shape.LinkFormat.SourcePath)
}
```
