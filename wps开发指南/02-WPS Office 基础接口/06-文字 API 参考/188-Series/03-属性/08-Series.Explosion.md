# Series.Explosion

返回或设置饼图或圆环图的扇区的分离程度值。可读/写 **Long** 类型。



## 语法

express.**Explosion**

express   一个代表 **Series** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果没有分离（即扇区的中心与饼图中心重合），该属性将返回 0（零）。



## 示例


```JavaScript
/*本示例显示活动文档中饼图扇区的分离程度值。*/
function test() {
    let series = Application.ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1)
    alert(series.Explosion)
}
```


```JavaScript
/*本示例将第一个文档中饼图扇区的分离程度值设置为10。*/
function test() {
    let series = Documents.Item(1).InlineShapes.Item(1).Chart.SeriesCollection(1)
    series.Explosion = 10
}
```
