# Trendline.Name

返回或设置对象的名称。可读/写 **String** 类型。



## 语法

express.**Name**

express   一个代表 **Trendline** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的第二个数据系列的第一条趋势线的名称。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    alert(trendline.Name)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的所有系列的第一条趋势线的名称。*/
function test() {
    let series = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection()
    let str = ""
    for (let i = 1; i <= series.Count; i++) {
        str += series.Item(i).Trendlines(1).Name + "\n"
    }
    alert(str)
}
```
