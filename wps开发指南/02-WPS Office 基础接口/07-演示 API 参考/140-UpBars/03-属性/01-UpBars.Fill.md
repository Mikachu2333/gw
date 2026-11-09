# UpBars.Fill

返回包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/obj)** 对象。只读。



## 语法

express.**Fill**

express   一个代表 **UpBars** 对象的变量。

## 类型

ChartFillFormat

## 示例


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第一个图表的第一个图表组的涨柱线的填充格式类型是否为实心填充。*/
function test() {
    let upBars = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).UpBars
    alert(upBars.Fill.Type == msoFillSolid)
}
```


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的涨柱线的名称为“涨柱线 1”，则将该涨柱线的填充设置为不可见。*/
function test() {
    let upBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).UpBars
    if (upBars.Name == "涨柱线 1") {
        upBars.Fill.Visible = msoFalse
    }
}
```
