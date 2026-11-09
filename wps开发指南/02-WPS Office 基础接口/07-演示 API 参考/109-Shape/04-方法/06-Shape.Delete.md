# Shape.Delete

删除指定的 Shape 对象。



## 语法

express.**Delete()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例从活动演示文稿的第一张幻灯片中删除所有任意多边形。*/
function test() {
    let shapes = Application.ActivePresentation.Slides.Item(1).Shapes
    for (let i = shapes.Count; i >= 1; i--) {
        if (shapes.Item(i).Type == msoFreeform) {
            shapes.Item(i).Delete()
        }
    }
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中的第二个形状删除。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).Delete()
}
```
