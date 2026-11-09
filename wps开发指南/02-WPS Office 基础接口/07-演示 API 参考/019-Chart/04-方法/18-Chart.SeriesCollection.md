# Chart.SeriesCollection

返回图表中的所有系列。



## 语法

express.**SeriesCollection(Index)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 数据系列的名称或编号。 |

## 返回值

一个 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SeriesCollection/obj)** 对象，该对象代表图表中的所有系列。

## 示例


```JavaScript
/*本示例对活动演示文稿的第一张幻灯片中第一个图表的第一个系列应用数据标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).HasDataLabels = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第二个图表的第二个系列是否有阴影。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    alert(shape.Chart.SeriesCollection().Item(2).Shadow)
}
```
