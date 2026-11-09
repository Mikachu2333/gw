# Chart.Paste

将剪贴板中的图表数据粘贴到图表中。



## 语法

express.**Paste(Type)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 指定要粘贴的图表信息（如果剪贴板中有一个图表）。可为下列值之一： \-4104粘贴全部内容。这是默认值。\-4122粘贴复制的源格式。\-4123粘贴公式。如果剪贴板上的数据不是图表，则不能使用此参数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将剪贴板中的内容粘贴到活动文档上第一张图表上。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Paste()
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一张图表的标题为“成绩表”，则将剪贴板的内容粘贴给图表。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    if (chart.ChartTitle.Text == "成绩表") {
        chart.Paste(-4104)
    }
}
```
