# Chart.SetBackgroundPicture

设置图表的背景图形。



## 语法

express.**SetBackgroundPicture(FileName)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图形文件的名称。 |

## 返回值

void

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一张图表的背景图形。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SetBackgroundPicture("E:\\chart.jpg")
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第二张图表的标题为“test”，则设置该图表的背景图形。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    if (chart.ChartTitle.Text == "test") {
        chart.SetBackgroundPicture("E:\\test.png")
    }
}
```
