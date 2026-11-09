# DataLabel.Separator

返回或设置用于图表中的数据标签的分隔符。可读/写 **Variant** 类型。



## 语法

express.**Separator**

express   一个代表 **DataLabel** 对象的变量。

## 类型

any

## 说明


如果使用字符串，则用一个字符串作为分隔符。如果使用 **xlDataLabelSeparatorDefault** (= 1)，则用默认数据标签分隔符，即逗号或换行符，具体取决于数据标签。



## 示例


```JavaScript
/*此示例将活动演示文稿的第一张幻灯片中第一个图表上的第一个系列的第一个数据标签分隔符设置为分号。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let datalabel = shape.Chart.SeriesCollection(1).DataLabels(1)
        datalabel.Separator = ";"
    }
}
```


```JavaScript
/*此示例将第一个演示文稿的第一张幻灯片中第一个图表上的第二个系列的第三个数据标签分隔符设置为默认值。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let datalabel = shape.Chart.SeriesCollection(2).DataLabels().Item(3)
    datalabel.Separator = xlDataLabelSeparatorDefault
}
```
