# ShapeRange.Width

返回或设置一个 **Single** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中新建的ShapeRange对象的宽度。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 3])
    alert(shpRange.Width)
}
```


```JavaScript
/*本示例将活动工作表中新建的ShapeRange对象的宽度设置为100磅。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([1, 2])
    shpRange.Width = 100
}
```
