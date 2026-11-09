# ShapeRange.HasChart

返回形状区域是否包含图表。 **MsoTriState** 类型，只读。



## 语法

express.**HasChart**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例显示第一张工作表中新建的ShapeRange对象是否包含图表。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([2, 3])
    if (shpRange.HasChart) {
        alert("包含图表")
    }else {
        alert("不包含图表")
    }
}
```


```JavaScript
/*本示例显示活动工作表中的所有形状是否包含图表。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.SelectAll()
    if (Selection.ShapeRange.HasChart) {
        alert("包含图表")
    }else {
        alert("不包含图表")
    }
}
```
