# Shape.Width

返回或设置一个 **Single** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中第一个形状的宽度。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    alert(shapes.Item(1).Width)
}
```


```JavaScript
/*本示例将活动工作表中第二个形状的宽度减小一半。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.Item(2).Width *= 0.5
}
```
