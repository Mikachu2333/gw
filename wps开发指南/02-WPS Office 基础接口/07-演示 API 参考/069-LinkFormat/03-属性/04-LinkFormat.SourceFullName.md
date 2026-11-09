# LinkFormat.SourceFullName

返回或设置链接 OLE 对象的源文件的名称和路径。可读/写。



## 语法

express.**SourceFullName**

express   一个代表 **LinkFormat** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片第一个形状的源文件设为 example.docx，并指定该对象的图像自动更新。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.Type == msoLinkedOLEObject) {
        let linkFormat = shape.LinkFormat
        linkFormat.SourceFullName = "D:\\TestFile\\example.docx"
        linkFormat.AutoUpdate = ppUpdateOptionAutomatic
    }
}
```


```JavaScript
/*本示例显示活动窗口所选的第一张幻灯片的第一个链接的 OLE 对象的源文件名称和路径。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(1)
    alert(shape.LinkFormat.SourceFullName)
}
```
