# ShapeRange.AutoShapeType

返回或设置指定的 **ShapeRange** 对象的形状类型，该形状类型必须代表自选图形，而不能代表直线、任意多边形图形或连接符。可读/写。



## 语法

express.**AutoShapeType**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoAutoShapeType

## 说明

使用 **[ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/obj)** 对象的 **Type** 属性可设置或返回连接符类型。

改变一个形状的类型时，该形状保留其大小、颜色和其他属性。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中所有 16 角星替换为 32 角星。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        let shapeRange = shapes.Range(i)
        if (shapeRange.AutoShapeType == msoShape16pointStar) {
            shapeRange.AutoShapeType = msoShape32pointStar
        }
    }
}
```


```JavaScript
/*本示例判断活动窗口上选中形状如果是加法符号，则删除该形状。*/
function test() {
    let shapeRange = ActiveWindow.Selection.ShapeRange
    if (shapeRange.AutoShapeType == msoShapeMathPlus) {
        shapeRange.Delete()
    }
}
```
