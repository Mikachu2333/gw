# ChartFont.Italic

如果字体样式为倾斜，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Italic**

express   一个代表 **ChartFont** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的图表标题的字体设置为斜体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.ChartTitle.Font.Italic = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的图表标题的字体格式是否设置为斜体。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        alert(shape.Chart.ChartTitle.Font.Italic)
    }
}
```
