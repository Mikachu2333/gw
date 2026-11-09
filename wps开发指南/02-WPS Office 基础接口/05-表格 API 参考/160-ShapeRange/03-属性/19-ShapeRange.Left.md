# ShapeRange.Left

返回或设置 **Single** 值，它代表从对象左边缘到工作表的 A 列左边缘或到图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将第一张工作表中新建的ShapeRange对象的左边缘设置为130。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Left = 130
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象的左边缘向右移动50。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([3])
    shpRange.Left += 50
}
```
