# Legend.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **Legend** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的图例的名称。*/
function test() {
    let legend = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Legend
    alert(legend.Name)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的图例的名称为“图例”，则将该图例删除。*/
function test() {
    let legend = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend
    if (legend.Name == "图例") {
        legend.Delete()
    }
}
```
