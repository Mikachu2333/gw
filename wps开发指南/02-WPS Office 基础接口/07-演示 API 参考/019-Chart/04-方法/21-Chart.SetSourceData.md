# Chart.SetSourceData

设置图表的源数据范围。



## 语法

express.**SetSourceData(Source, PlotBy)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Source | 必选 | string | 包含源数据的图表数据范围的地址。 |
| PlotBy | 可选 | any | 指定数据绘制方式。可为下列 **[XlRowCol](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlRowCol)** 常量之一： **xlColumns** 或 **xlRows** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的源数据范围。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SetSourceData("='Sheet1'!$B$2:$D$4", xlColumns)
    }
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第二张图表的源数据范围。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.SetSourceData("='Sheet1'!$B$2:$E$5", xlRows)
}
```
