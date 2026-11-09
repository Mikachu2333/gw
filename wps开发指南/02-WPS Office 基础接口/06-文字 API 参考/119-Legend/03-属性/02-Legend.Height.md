# Legend.Height

以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **Legend** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的图例的高度。*/
function test() {
    let legend = ActiveDocument.InlineShapes.Item(1).Chart.Legend
    alert(`图例的高度：${legend.Height} 磅`)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的图例的高度设置为 20 磅。*/
function test() {
    let legend = Documents.Item(1).Shapes.Item(1).Chart.Legend
    legend.Height = 20
}
```
