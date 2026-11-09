# ConnectorFormat.Type

代表连接符的类型。可读/写。



## 语法

express.**Type**

express   一个代表 **ConnectorFormat** 对象的变量。

## 类型

MsoConnectorType

## 说明


 **Type** 属性的值可以是下列 **MsoConnectorType** 常量之一：

| 常量 |
| ------------------------- |
| **msoConnectorCurve**     |
| **msoConnectorElbow**     |
| **msoConnectorStraight**  |
| **msoConnectorTypeMixed** |



## 示例


```JavaScript
/*本示例将活动窗口选定的第一个连接符的类型设置为msoConnectorElbow。*/
function test() {
    let connectorFormat = ActiveWindow.Selection.ShapeRange.Item(1).ConnectorFormat
    connectorFormat.Type = msoConnectorElbow
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第二个（连接符）形状的类型是否为msoConnectorCurve。*/
function test() {
    let connectorFormat = ActivePresentation.Slides.Item(1).Shapes.Item(2).ConnectorFormat
    alert(connectorFormat.Type == msoConnectorCurve)
}
```
