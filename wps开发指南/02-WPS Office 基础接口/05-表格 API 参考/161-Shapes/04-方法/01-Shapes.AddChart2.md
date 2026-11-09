# Shapes.AddChart2

向文档添加图表。 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象代表图表并将其添加到指定的集合。



## 语法

express.**AddChart2(Style, XlChartType, Left, Top, Width, Height, NewLayout)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 可选 | any | 图表样式。 使用“-1”获取 XlChartType 中指定的图表类型的默认样式。 |
| XlChartType | 可选 | any | 图表类型。 |
| Left | 可选 | any | 图表左边缘相对于定位点的位置（以 磅为单位）。 |
| Top | 可选 | any | 图表上边缘距离定位点的以磅为单位的位置。 |
| Width | 可选 | any | 以磅为单位的图表宽度。 |
| Height | 可选 | any | 以磅为单位的图表高度。 |
| NewLayout | 可选 | any | 如果 NewLayout 为 True，则使用新的动态格式设置规则插入图表， (标题处于打开状态，并且仅当有多个系列) 时，图例才会打开。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动工作表中添加一个图表框。*/
function test() {
    ActiveSheet.Shapes.AddChart2()
}
```


```JavaScript
/*本示例向第一张工作表中指定位置添加一个长度、高度都为150磅的图表框。*/
function test() {
    Application.Worksheets.Item(1).Shapes.AddChart2(null, null, 100, 100, 150, 150)
}
```
