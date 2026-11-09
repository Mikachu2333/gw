# ChartTitle.Text

返回或设置指定对象中的文本。可读/写 **String** 类型。



## 语法

express.**Text**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的图表标题的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.HasTitle = true
        shape.Chart.ChartTitle.Text = "First Quarter Sales"
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的图表标题的文本。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Text)
}
```
