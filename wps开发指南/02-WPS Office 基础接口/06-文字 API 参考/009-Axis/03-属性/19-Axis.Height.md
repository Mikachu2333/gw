# Axis.Height

以磅为单位返回对象的高度。只读 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档第一张图表的数值坐标轴的高度。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes(1).Chart.Axes(xlValue)
    alert(axis.Height)
}
```


```JavaScript
/*本示例显示第一个文档第一张图表的分类坐标轴的高度。*/
function test() {
    let axis = Documents.Item(1).InlineShapes(1).Chart.Axes(xlCategory)
    alert(axis.Height)
}
```
