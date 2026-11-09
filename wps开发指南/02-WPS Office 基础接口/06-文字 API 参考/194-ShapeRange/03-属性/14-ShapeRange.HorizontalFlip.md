# ShapeRange.HorizontalFlip

表示该形状范围已进行水平翻转。只读 **MsoTriState** 类型。



## 语法

express.**HorizontalFlip**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例判断如果活动文档中包含第一个和第二个形状的形状范围进行过水平翻转，则还原至初始状态。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    if (shapeRange.HorizontalFlip == msoTrue) {
        shapeRange.Flip(msoFlipHorizontal)
    }
}
```


```JavaScript
/*本示例判断第一个文档中所有形状是否进行过水平翻转，并通知用户。*/
function test() {
    Documents.Item(1).Shapes.SelectAll()
    if (Selection.ShapeRange.HorizontalFlip == msoTrue) {
        alert("已水平翻转")
    } else {
        alert("未水平翻转")
    }
}
```
