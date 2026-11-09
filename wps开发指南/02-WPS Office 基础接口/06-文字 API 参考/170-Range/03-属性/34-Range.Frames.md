# Range.Frames

返回一个 **[Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/obj)** 集合，该集合代表区域中的所有框架。只读。



## 语法

express.**Frames**

express   一个代表 **Range** 对象的变量。

## 类型

Frames

## 示例


```JavaScript
/*本示例使活动文档第一节中的文字环绕框架。*/
function test() {
    let range = ActiveDocument.Sections.Item(1).Range
    for (let i = 1; i <= range.Frames.Count; i++) {
        range.Frames.Item(i).TextWrap = true
    }
}
```


```JavaScript
/*本示例设置第一个文档的主文档文章中第三个框架的外边框的线条类型和线条宽度。*/
function test() {
    let frame = Documents.Item(1).Content.Frames.Item(3)
    frame.Borders.OutsideLineWidth = wdLineWidth150pt
    frame.Borders.OutsideLineStyle = wdLineStyleDashDot
}
```
