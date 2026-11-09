# Shape.TopLeftCell

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于指定对象左上角下方的单元格。只读。



## 语法

express.**TopLeftCell**

express   一个代表 **Shape** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将活动工作表中第一个形状左上角所在的单元格的值设置为 "Hello"。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    let range = shape.TopLeftCell
    range.Value2 = "Hello"
}
```


```JavaScript
/*本示例将第一张工作表中第二个形状左上角所在的单元格的背景色设置为红色。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(2)
    let range  = shape.TopLeftCell
    range.Interior.Color = RGB(255, 0, 0)
}
```
