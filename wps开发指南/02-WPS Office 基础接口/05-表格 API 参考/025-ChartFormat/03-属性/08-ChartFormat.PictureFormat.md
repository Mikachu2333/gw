# ChartFormat.PictureFormat

返回包含图片的指定图表的 **[PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/obj)** 对象。只读。



## 语法

express.**PictureFormat**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

PictureFormat

## 示例


```JavaScript
/*此示例设置工作表 Sheet1 第一个内嵌图表的图表区图片亮度为 0.2 。*/
function test() {
    let chartformat = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.PictureFormat.Brightness = 0.2
}
```


```JavaScript
/*此示例将图表工作表 Chart1 图表区的图片转换为黑白。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.PictureFormat.ColorType = msoPictureBlackAndWhite
}
```
