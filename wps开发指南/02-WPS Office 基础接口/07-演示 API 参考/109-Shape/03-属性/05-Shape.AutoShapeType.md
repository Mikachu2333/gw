# Shape.AutoShapeType

返回或设置指定的 **Shape** 或 **ShapeRange** 对象的形状类型，该对象必须代表自选图形，而不能代表直线、任意多边形图形或连接符。 **MsoAutoShapeType** 类型，可读写。



## 语法

express.**AutoShapeType**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoAutoShapeType

## 说明


改变一个形状的类型时，该形状保留其大小、颜色和其他属性。

使用 **ConnectorFormat** 对象的 **Type** 属性可设置或返回连接符类型。



## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片上用 32 角星替换所有 16 角星。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).AutoShapeType == msoShape16pointStar) {
            shapes.Item(i).AutoShapeType = msoShape32pointStar
        }
    }
}
```


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上第三个形状为加号，则删除该形状。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    if (shapes.Item(3).AutoShapeType == msoShapeMathPlus) {
        shapes.Item(3).Delete()
    }
}
```
