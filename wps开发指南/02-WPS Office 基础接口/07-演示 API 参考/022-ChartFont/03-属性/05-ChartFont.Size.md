# ChartFont.Size

返回或设置字号。可读/写 **Variant** 类型。



## 语法

express.**Size**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的标题字号设置为 12 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartTitle.Font.Size = 12
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的标题字号大小。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.ChartTitle.Font.Size)
    }
}
```
