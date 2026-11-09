# Shape.Duplicate

创建指定的 **Shape** 对象的副本，以标准的偏移将新图形从原图形添加至 **Shapes** 集合，然后返回新的 **Shape** 对象。



## 语法

express.**Duplicate()**

express   一个代表 **Shape** 对象的变量。

## 返回值

Shape

## 示例


```JavaScript
/*本示例创建活动文档第一个图形的副本，然后改变新图形的填充格式。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1).Duplicate()
    shape.Fill.PresetGradient(msoGradientVertical, 1, msoGradientGold)
}
```


```JavaScript
/*本示例用于复制活动文档的第二个形状，并将复制的新形状高度扩大至原来的1.5倍。*/
function test() {
    let originalShape = Application.ActiveDocument.Shapes.Item(2)
    let newShape = originalShape.Duplicate()
    newShape.Height = originalShape.Height * 1.5
}
```
