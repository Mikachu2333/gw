# Chart.CopyPicture

将所选对象作为图片复制到剪贴板。



## 语法

express.**CopyPicture(Appearance, Format, Size)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Appearance | 可选 | XlPictureAppearance | 用于指定图片的复制方式的枚举值之一。默认值为 **xlScreen** 。 |
| Format | 可选 | XlCopyPictureFormat | 用于指定图片格式的枚举值之一。默认值为 **xlPicture** 。 |
| Size | 可选 | XlPictureAppearance | 指定所复制图片的大小的枚举值之一。默认值为 **xlPrinter** 。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一张图表作为图片复制到剪贴板。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.CopyPicture()
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿的第一张幻灯片上第二张图表的图表类型为 xlLine，则将其作为图片复制到剪贴板。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    if (chart.ChartType == xlLine) {
        chart.CopyPicture(xlPrinter, xlBitmap, xlScreen)
    }
}
```
