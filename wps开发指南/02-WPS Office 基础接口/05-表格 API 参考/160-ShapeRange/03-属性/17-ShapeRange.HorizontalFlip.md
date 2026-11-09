# ShapeRange.HorizontalFlip

如果指定的形状绕水平对称轴翻转，则为 **True** 。 **MsoTriState** ，只读。



## 语法

express.**HorizontalFlip**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例判断如果第一张工作表中新建的ShapeRange对象进行过水平翻转，则还原至初始状态。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    if (shpRange.HorizontalFlip) {
        shpRange.Flip(msoFlipHorizontal)
    }
}
```


```JavaScript
/*本示例判断活动工作表的所有形状是否进行过水平翻转。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    if (Selection.ShapeRange.HorizontalFlip) {
        alert("已水平翻转")
    } else {
        alert("未水平翻转")
    }
}
```
