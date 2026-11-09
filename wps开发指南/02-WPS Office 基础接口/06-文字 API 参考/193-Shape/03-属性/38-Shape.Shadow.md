# Shape.Shadow

返回一个 **ShadowFormat** 对象，该对象代表指定形状的阴影格式。



## 语法

express.**Shadow**

express   一个代表 **Shape** 对象的变量。

## 类型

ShadowFormat

## 示例


```JavaScript
/*本示例向活动文档中添加一个带阴影格式的箭头。*/
function test() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeRightArrow, 90, 79, 64, 43)
    shape.Shadow.Type = msoShadow5
}
```


```JavaScript
/*本示例向第一个文档中添加一个带阴影格式的五角星，然后设置五角星阴影的前景色。*/
function test() {
    let shape = Documents.Item(1).Shapes.AddShape(msoShape5pointStar, 200, 150, 100, 100)
    shape.Shadow.Type = msoShadow17
    shape.Shadow.ForeColor.RGB = RGB(0, 255, 0)
}
```
