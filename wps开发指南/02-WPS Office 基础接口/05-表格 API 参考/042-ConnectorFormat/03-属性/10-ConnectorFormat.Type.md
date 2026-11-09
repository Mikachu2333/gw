# ConnectorFormat.Type

返回或设置一个 **MsoConnectorType** 值，它代表连接符格式类型。



## 语法

express.**Type**

express   一个代表 **ConnectorFormat** 对象的变量。

## 类型

MsoConnectorType

## 示例


```JavaScript
/*本示例将第一张工作表中第三个形状（连接符）格式类型设置为直线。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let shape = shapes.Item(3)
    shape.ConnectorFormat.Type = msoConnectorStraight
}
```


```JavaScript
/*本示例显示活动工作表中第四个形状（连接符）的格式类型是否为曲线。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let shape = shapes.Item(4)
    alert(shape.ConnectorFormat.Type == msoConnectorCurve)
}
```
