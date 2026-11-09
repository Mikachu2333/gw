# InlineShapes.AddChart2

向文档添加图表。返回一个 **InlineShape** 对象，该对象代表图表并将其添加到指定的集合。



## 语法

express.**AddChart2(Style, Type, Range, NewLayout)**

express   一个代表 **InlineShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 可选 | number（int4 精度） | 图表样式。使用 “-1” 获取 **Type** 中指定的图表类型的默认样式。 |
| Type | 可选 | XlChartType | 图表类型。 |
| Range | 可选 | any | 图表将在文本中放置的区域。图表将替换范围，除非范围已折叠。如果省略此参数，则会自动放置图表。 |
| NewLayout | 可选 | any | 如果 **NewLayout** 为 **True** ，则使用新的动态格式规则插入图表（标题处于打开状态，并且仅当存在多个序列时，图例才处于打开状态）。 |

## 返回值

InlineShape

## 示例


```JavaScript
/*本示例向活动文档添加图表。*/
function test() {
    ActiveDocument.InlineShapes.AddChart2()
}
```


```JavaScript
/*本示例在第一个文档上所选区域中新建一个堆积条形图。*/
function test() {
    Documents.Item(1).InlineShapes.AddChart2(3, xlBarStacked, Selection.Range, true)
}
```
