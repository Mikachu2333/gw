# ShapeRange.Duplicate

创建指定的 **ShapeRange** 对象的副本，以标准的偏移将新图形区域从原图形添加至 **Shapes** 集合，然后返回 **ShapeRange** 对象。



## 语法

express.**Duplicate()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

ShapeRange

## 示例


```JavaScript
/*本示例创建活动文档第一个图形的副本，然后改变新图形的填充格式。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range(1).Duplicate()
    shapeRange.Fill.PresetGradient(msoGradientVertical, 1, msoGradientGold)
}
```


```JavaScript
/*本示例创建第一个文档中所有图形的副本。*/
function test() {
    Documents.Item(1).Shapes.SelectAll()
    Selection.ShapeRange.Duplicate()
}
```
