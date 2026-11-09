# Shape.Ungroup

取消指定形状或者形状区域中任意组合形状的组合。取消指定形状或形状区域中图片和 OLE 对象的组合。取消组合后的形状以单个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象的形式返回。



## 语法

express.**Ungroup()**

express   一个代表 **Shape** 对象的变量。

## 返回值

ShapeRange

## 说明


由于将一组形状作为单个形状来处理，对形状进行组合和取消组合将会改变 **Shapes** 集合中项目的数量，并且改变集合中受影响的项目之后的项目索引编号。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中所有的形状取消组合。其中第一个循环先记录了所有形状的名称，示例中两个for循环也可改为用一个for of方式遍历所有形状。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    let shapeNames = []
    for (let i = 1; i <= shapes.Count; ++i) {
        shapeNames.push(shapes.Item(i).Name)
    }
    for (let i = 0; i < shapeNames.length; ++i) {
        shapes.Item(shapeNames[i]).Ungroup()
    }
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中所有的组合形状取消组合。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).Type == msoGroup) {
            shapes.Item(i).Ungroup()
        }
    }
}
```
