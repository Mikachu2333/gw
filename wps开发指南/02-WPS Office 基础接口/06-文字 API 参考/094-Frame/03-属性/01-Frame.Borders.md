# Frame.Borders

返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定框架的所有边框。



## 语法

express.**Borders**

express   一个代表 **Frame** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例设置活动文档上第一个框架的外边框的颜色。*/
function test() {
    let frame = ActiveDocument.Frames.Item(1)
    frame.Borders.OutsideColor = wdColorBlue
}
```


```JavaScript
/*本示例设置所选内容中第三个框架的外边框的线条类型和线条宽度。*/
function test() {
    let frame = Selection.Frames.Item(3)
    frame.Borders.OutsideLineWidth = wdLineWidth150pt
    frame.Borders.OutsideLineStyle = wdLineStyleDashDot
}
```
