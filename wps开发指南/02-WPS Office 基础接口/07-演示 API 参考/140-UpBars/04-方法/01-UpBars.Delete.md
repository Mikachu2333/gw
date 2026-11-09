# UpBars.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **UpBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的涨跌柱线。*/
function test() {
    let upBars = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).UpBars
    upBars.Delete()
}
```


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上第一个图表的第一个图表组启用涨跌柱线，则删除该涨跌柱线。*/
function test() {
    let chartGroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    if (chartGroup.HasUpDownBars) {
        chartGroup.UpBars.Delete()
    }
}
```
