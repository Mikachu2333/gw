# Legend.IncludeInLayout

如果在确定图表布局时图例将占用图表布局空间，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**IncludeInLayout**

express   一个代表 **Legend** 对象的变量。

## 类型

boolean

## 说明


该属性对于图表是否处于自动版式模式没有影响。如果用户使用 **“图表上方”** 命令添加标题，则图表将变得较小，就像在以前版本的 WPP 中一样。如果用户随后删除标题，或者选择其中一个覆盖标题选项，则图表将变得较大，就好像标题不在图表上那样。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的图例是否占用图表布局空间。*/
function test() {
    let legend = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend
    alert(legend.IncludeInLayout)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的图例设置为不占用图表布局空间。*/
function test() {
    let legend = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend
    legend.IncludeInLayout = false
}
```
