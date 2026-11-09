# Shape.AutoShapeType

返回或设置指定的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 或 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象的形状类型，该对象必须代表自选图形，而不能代表直线、任意多边形图形或连接符。 **MsoAutoShapeType** 类型，可读写。



## 语法

express.**AutoShapeType**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoAutoShapeType

## 说明


改变一个形状的类型时，该形状保留其大小、颜色和其他属性。

使用 **ConnectorFormat** 对象的 **Type** 属性设置或返回连接符类型。



## 示例


```JavaScript
/*本示例将第一张工作表中的所有 16 角星都替换为 32 角星。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).AutoShapeType == msoShape16pointStar) {
            shapes.Item(i).AutoShapeType = msoShape32pointStar
        }
    }
}
```


```JavaScript
/*本示例判断第一张工作表中第四个形状是否为加号，是则删除。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    if (shapes.Item(4).AutoShapeType == msoShapeMathPlus) {
        shapes.Item(4).Delete()
    }
}
```
