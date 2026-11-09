# Chart.Export

以图形格式导出图表。



## 语法

express.**Export(FileName, FilterName, Interactive)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 被导出的文件的名称。 |
| FilterName | 可选 | any | 图形过滤器出现在注册表中时独立于语言的名称。 |
| Interactive | 可选 | any | 如果值为 **True** ，则显示包含过滤器特定选项的对话框。如果值为 **False** ，则表示 WPS文字 应该对过滤器使用默认值。默认值为 **False** 。 |

## 返回值

一个指示导出是否成功的 **Boolean** 值。

## 示例


```JavaScript
/*本示例将活动文档中的第一个图表导出为 PNG 文件。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Export("D:\\current_sales.png", "PNG")
    }
}
```


```JavaScript
/*本示例将第一个文档中的第一个图表导出为 JPG 文件。*/
function test() {
    let chart = Documents.Item(1).InlineShapes(1).Chart
    chart.Export("D:\\chart.jpg", "JPG")
}
```
