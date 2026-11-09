# Shape.Type

返回内嵌形状的类型。只读 **MsoShapeType** 类型。



## 语法

express.**Type**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoShapeType

## 示例


```JavaScript
/*本示例判断活动文档中第三个内嵌形状的类型是否为自选图形并显示结果。*/
function test() {
    let shape = Application.ActiveDocument.Shapes.Item(3)
    if (shape.Type == msoAutoShape) {
        alert("这是自选图形")
    } else {
        alert("这不是自选图形")
    }
}
```


```JavaScript
/*本示例显示活动文档中的第一个内嵌形状的类型是否为图片。*/
function test() {
    let shapes = Application.ActiveDocument.Shapes
    alert(shapes.Item(1).Type == msoPicture)
}
```
