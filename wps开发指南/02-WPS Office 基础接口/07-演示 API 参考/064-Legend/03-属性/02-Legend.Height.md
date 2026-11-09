# Legend.Height

以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **Legend** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的图例的高度。*/
function test() {
    let legend = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend
    alert(`图例的高度：${legend.Height} 磅`)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的图例的高度设置为 20 磅。*/
function test() {
    let legend = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend
    legend.Height = 20
}
```
