# Series.Has3DEffect

如果系列有三维外观，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Has3DEffect**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于气泡图。



## 示例


```JavaScript
/*本示例为活动演示文稿上第一张幻灯片中第一个图表的第一个系列设置三维外观。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Has3DEffect = true
    }
}
```


```JavaScript
/*本示例显示第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列是否具有三维外观。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(3).Has3DEffect)
}
```
