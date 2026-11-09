# ShapeRange.Ungroup

取消指定形状或者形状区域中任意组合形状的组合。取消指定形状或形状区域中图片和 OLE 对象的组合。取消组合后的形状以单个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/obj)** 对象的形式返回。



## 语法

express.**Ungroup()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

ShapeRange

## 说明


由于将一组形状作为单个形状来处理，对形状进行组合和取消组合将会改变 **Shapes** 集合中项目的数量，并且改变集合中受影响的项目之后的项目索引编号。



## 示例


```JavaScript
/*本示例取消活动演示文稿第一张幻灯片中的所有形状组合，并分解所有的图片或 OLE 对象的组合。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Range(i).Type == msoGroup) {
            shapes.Range(i).Ungroup()
        }
    }
}
```


```JavaScript
/*本示例取消活动窗口上选中组合形状的组合。*/
function test() {
    ActiveWindow.Selection.ShapeRange.Ungroup()
}
```
