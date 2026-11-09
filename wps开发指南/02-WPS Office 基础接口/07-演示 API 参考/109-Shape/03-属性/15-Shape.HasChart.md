# Shape.HasChart

返回指定对象代表的形状是否包含图表。只读。



## 语法

express.**HasChart**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


 **HasChart** 属性的值可以是其中一个 **MsoTriState** 常量。

| 常量           | 说明            |
| ------------ | ------------- |
| **msoFalse** | 指定的形状不包含图表。 |
| **msoTrue**  | 指定的形状包含图表。  |



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第二个形状中图表的第二个数据系列的趋势线数目。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    if (shape.HasChart) {
        alert(shape.Chart.SeriesCollection(2).Trendlines().Count)
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中的第一个形状是否有图表。*/
function test() {
    alert(ActivePresentation.Slides.Item(1).Shapes.Item(1).HasChart === msoTrue)
}
```
