# Shape.Placement

返回或设置一个 **[XlPlacement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPlacement)** 值，它代表对象附加到对象下面的单元格的方式。



## 语法

express.**Placement**

express   一个代表 **Shape** 对象的变量。

## 类型

XlPlacement

## 示例


```JavaScript
/*本示例设置活动工作表的第一个形状为可自由浮动（既不随下方单元格移动，也不随其改变大小）。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(2)
    shape.Placement = xlFreeFloating
}
```


```JavaScript
/*本示例设置第一个工作表的第一个形状随单元格移动和调整大小。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    shape.Placement = xlMoveAndSize
}
```
