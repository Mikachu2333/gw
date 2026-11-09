# ShapeRange.AutoShapeType

返回或设置指定的 **ShapeRange** 对象的图形类型，该对象不是代表线条或任意多边形，而是代表自选图形。 **MsoAutoShapeType** 类型，可读写。



## 语法

express.**AutoShapeType**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoAutoShapeType

## 说明


改变一个形状的类型时，该形状保留其大小、颜色和其他属性。



## 示例


```JavaScript
/*本示例判断活动文档中新建的ShapeRange对象如果是 16 角星，则替换为 32 角星。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([2, 1])
    if (shapeRange.AutoShapeType == msoShape16pointStar) {
        shapeRange.AutoShapeType = msoShape32pointStar
    }
}
```


```JavaScript
/*本示例判断第一个文档中新建的ShapeRange对象如果是加号，则删除。*/
function test() {
    let shpRange = Documents.Item(1).Shapes.Range([4, 5])
    if (shpRange.AutoShapeType == msoShapeMathPlus) {
        shpRange.Delete()
    }
}
```
