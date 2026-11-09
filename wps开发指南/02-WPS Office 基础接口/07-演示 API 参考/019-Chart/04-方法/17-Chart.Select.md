# Chart.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | 如果该值为 **True** ，则用指定的对象替换当前选定内容。值为 **False** ，则扩展当前选定内容以将之前选择的所有对象以及指定的对象都包含在内。 |

## 返回值

void

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片的第一个图表。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.Select()
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二张图表的标题为“test”，则选中该图表。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    if (chart.ChartTitle.Text == "test") {
        chart.Select()
    }
}
```
