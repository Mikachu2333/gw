# Legend.Width

以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。



## 语法

express.**Width**

express   一个代表 **Legend** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将活动文档第一个内嵌图表中的图例的宽度设置为200磅。*/
function test() {
    ActiveDocument.InlineShapes.Item(1).Chart.Legend.Width = 200
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的图例的宽度。*/
function test() {
    let legend = Documents.Item(1).Shapes.Item(1).Chart.Legend
    alert(legend.Width + " 磅")
}
```
