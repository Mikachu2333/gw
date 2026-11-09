# Chart.Export

以图形格式导出图表。



## 语法

express.**Export(FileName, FilterName, Interactive)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 被导出的文件的名称。 |
| FilterName | 可选 | any | 图形过滤器出现在注册表中时独立于语言的名称，例如，PNG 或 GIF。如果未提供值，则默认使用 PNG。 |
| Interactive | 可选 | any | 如果该值为 **True** ，则显示包含过滤器特定选项的对话框。 **False** 指示 WPP 应对过滤器使用默认值。默认值为 **False** 。 |

## 返回值

指示导出是否成功的 **Boolean** 值。

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个图表导出为 PNG 文件。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Export("E:\\current_sales.png", "PNG")
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片的第二个图表导出为 JPG 文件。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.Export("E:\\chart.jpg", "JPG", true)
}
```
