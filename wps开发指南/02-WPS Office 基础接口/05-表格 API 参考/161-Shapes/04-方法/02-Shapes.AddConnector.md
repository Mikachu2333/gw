# Shapes.AddConnector

创建一个连接符。返回一个代表新连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象。添加一个连接符时，它没有连接到任何对象。使用 **[BeginConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/BeginConnect)** 和 **[EndConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/EndConnect)** 方法可将连接符的头和尾连接到文档中的其他形状上。



## 语法

express.**AddConnector(Type, BeginX, BeginY, EndX, EndY)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoConnectorType | 要添加的连接符类型。 |
| BeginX | 必选 | number（float 精度） | 连接符的起点相对于文档左上角的水平位置（以磅为单位）。 |
| BeginY | 必选 | number（float 精度） | 连接符的起点相对于文档左上角的垂直位置（以磅为单位）。 |
| EndX | 必选 | number（float 精度） | 连接符的终点相对于文档左上角的水平位置（以磅为单位）。 |
| EndY | 必选 | number（float 精度） | 连接符的终点相对于文档左上角的垂直位置（以磅为单位）。 |

## 返回值

Shape

## 说明


| **MsoConnectorType** 可以是下列 **MsoConnectorType** 常量之一。 |
| ----------------------------------------------------- |
| **msoConnectorElbow**                                 |
| **msoConnectorTypeMixed**                             |
| **msoConnectorCurve**                                 |
| **msoConnectorStraight**                              |

将连接符连接到形状上时，连接符的大小和位置将自动进行必要的调整。因此，将连接符连接到其他形状上时，添加连接符时所指定的初始大小和位置是无关紧要的。



## 示例


```JavaScript
/*本示例向第一张工作表添加直线连接线。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    let connector = shapes.AddConnector(msoConnectorStraight, 150, 150, 200, 200)
}
```


```JavaScript
/*本示例向活动工作表添加肘形连接符。*/
function test() {
    ActiveSheet.Shapes.AddConnector(msoConnectorElbow, 100, 100, 400, 200)
}
```
