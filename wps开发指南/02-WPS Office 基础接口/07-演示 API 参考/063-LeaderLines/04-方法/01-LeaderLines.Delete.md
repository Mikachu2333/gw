# LeaderLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **LeaderLines** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个图表的第一个数据系列的引导线。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let leaderLines = shape.Chart.SeriesCollection(1).LeaderLines
    leaderLines.Delete()
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的引导线。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let leaderLines = shape.Chart.SeriesCollection(2).LeaderLines
    leaderLines.Delete()
}
```
