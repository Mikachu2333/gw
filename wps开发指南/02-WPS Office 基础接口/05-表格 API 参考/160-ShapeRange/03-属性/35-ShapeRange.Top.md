# ShapeRange.Top

返回或设置一个 **Single** 值，它代表形状范围内最上面的形状的上边缘到工作表上边缘的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例先在第一张工作表中创建shpRange对象，然后将对象上边缘到工作表上边缘的距离设置为150磅。*/
function test() {
    let shpRange = Application.Worksheets.Item(1).Shapes.Range([1, 2])
    shpRange.Top = 150
}
```


```JavaScript
/*本示例先在活动工作表中创建shpRange对象，然后显示对象上边缘到工作表上边缘的距离。*/
function test() {
    let shpRange = ActiveSheet.Shapes.Range([3])
    alert(shpRange.Top)
}
```
