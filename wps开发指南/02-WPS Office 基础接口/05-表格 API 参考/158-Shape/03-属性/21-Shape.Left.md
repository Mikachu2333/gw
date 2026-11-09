# Shape.Left

返回或设置 **Single** 值，它代表从对象左边缘到工作表的 A 列左边缘或到图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动工作表中第一个形状的左边缘到活动工作表左边缘的距离。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    alert(shape.Left)
}
```


```JavaScript
/*本示例将第一张工作表中第二个形状的左边缘向左移动30。*/
function test() {
    let shape = Worksheets.Item(1).Shapes.Item(2)
    shape.Left = shape.Left - 30
}
```
