# Chart.SetBackgroundPicture

设置图表的背景图形。



## 语法

express.**SetBackgroundPicture(FileName)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图形的文件名。 |

## 返回值

void

## 示例


```JavaScript
/*本示例设置活动文档中第一张图表的背景图形。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    chart.SetBackgroundPicture("D:\\picture.png")
}
```


```JavaScript
/*本示例判断如果第一个文档上第一张图表的标题为“成绩表”，则设置该图表的背景图形。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    if (chart.ChartTitle.Text == "成绩表") {
        chart.SetBackgroundPicture("D:\\picture.png")
    }
}
```
