# Chart.SetElement

设置图表上的图表元素。可读/写 **MsoChartElementType** 类型。



## 语法

express.**SetElement(Element)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Element | 必选 | MsoChartElementType | 指定图表元素类型的一个枚举值。 |

## 返回值

void

## 说明


对于图表， **“布局”** 选项卡中的以下命令对应于 **SetElement** 方法：

* **“标签”** 组中的全部内容。
* **“坐标轴”** 组中的全部内容。
* **“分析”** 组中的全部内容。
* **“绘图区”** 、 **“图表背景墙”** 和 **“图表基底”** 按钮。

 **MsoChartElementType** 是常量枚举，引用上述所有命令。



## 示例


```JavaScript
/*本示例使用不同常量值为活动文档上第一张图表设置图表元素。*/
function test() {
    if (ActiveDocument.InlineShapes(1).HasChart) {
        let chart = ActiveDocument.InlineShapes(1).Chart
        // Select the major gridlines on the value axis.
        chart.Axes(xlValue).MajorGridlines.Select()
        chart.SetElement(msoElementChartTitleCenteredOverlay)
        chart.SetElement(msoElementPrimaryCategoryGridLinesMinor)
    }
}
```


```JavaScript
/*本示例将第一个文档上第一张图表的模拟运算表设置为可见。*/
function test() {
    let chart = Documents.Item(1).InlineShapes(1).Chart
    chart.SetElement(msoElementDataTableShow)
}
```
