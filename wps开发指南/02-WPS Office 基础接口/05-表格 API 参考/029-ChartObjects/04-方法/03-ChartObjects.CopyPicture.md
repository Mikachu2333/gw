# ChartObjects.CopyPicture

将所选对象作为图片复制到剪贴板。



## 语法

express.**CopyPicture(Appearance, Format)**

express   一个代表 **ChartObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Appearance | 可选 | XlPictureAppearance | 指定图片的复制方式。默认值为 xlScreen。 |
| Format | 可选 | XlCopyPictureFormat | 图片的格式。默认值为 xlPicture。 |

## 返回值

any

## 示例


```JavaScript
/*本示例将工作表 Sheet1 上所有图表作为图片以位图 (光栅) 格式复制到剪贴板。*/
function test() {
    let chartobjects = Application.Worksheets.Item("Sheet1").ChartObjects()
    chartobjects.CopyPicture(xlScreen, xlBitmap)
}
```


```JavaScript
/*本示例将图表工作表 Chart1 上所有图表作为图片以矢量格式复制到剪贴板。*/
function test() {
    let chartobjects = Application.Charts.Item("Chart1").ChartObjects()
    chartobjects.CopyPicture(xlPrinter, xlPicture)
}
```
