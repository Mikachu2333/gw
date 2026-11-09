# Document.Frames

返回一个 **[Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/obj)** 集合，该集合代表文档中的所有框架。只读。



## 语法

express.**Frames**

express   一个代表 **Document** 对象的变量。

## 类型

Frames

## 示例


```JavaScript
/*本示例在选定内容的四周添加一个框架，并将框架对象返回给 frame 变量。*/
function test() {
    let frame = ActiveDocument.Frames.Add(Selection.Range)
}
```


```JavaScript
/*本示例设置第一个文档中第三个框架的外边框的线条类型和线条宽度。*/
function test() {
    let frame = Documents.Item(1).Frames.Item(3)
    frame.Borders.OutsideLineWidth = wdLineWidth150pt
    frame.Borders.OutsideLineStyle = wdLineStyleDashDot
}
```
