# Chart.CopyPicture

将所选对象作为图片复制到剪贴板。



## 语法

express.**CopyPicture(Appearance, Format, Size)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Appearance | 可选 | XlPictureAppearance | 指定图片的复制方式。默认值为 xlScreen。 |
| Format | 可选 | XlCopyPictureFormat | 图片的格式。默认值为 xlPicture。 |
| Size | 可选 | XlPictureAppearance | 当对象是图表工作表中的图表（不是工作表中的嵌入式图表）时，此参数代表复制图片的大小。默认值为 xlPrinter。 |

## 返回值

void

## 示例


```JavaScript
/*此示例将活动工作表第一张内嵌图表作为图片复制到剪贴板。*/
function test() {
    let chart = Application.ActiveSheet.ChartObjects(1).Chart
    chart.CopyPicture(xlScreen, xlBitmap)
}
```


```JavaScript
/*此示例将图表工作表 Chart1 作为图片复制到剪贴板。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.CopyPicture(xlPrinter, null, xlScreen)
}
```
