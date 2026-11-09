# Point.Top

返回一个值，该值代表从对象上边缘到图表区上边缘的距离（以磅为单位）。只读。



## 语法

express.**Top**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的第一个系列的第三个数据点的上边缘到图表区上边缘的距离。*/
function test() {
    let point = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(point.Top + " 磅")
}
```


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上第一个图表中第二个系列的第二个数据点的上边缘到图表区上边缘的距离大于10，则设置其边框线粗细。*/
function test() {
    let point = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(2)
    if (point.Top > 10) {
        point.Format.Line.Weight = 5
    }
}
```
