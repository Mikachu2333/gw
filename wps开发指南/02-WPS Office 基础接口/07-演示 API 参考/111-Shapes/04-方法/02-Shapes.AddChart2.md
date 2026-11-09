# Shapes.AddChart2

向演示文稿添加图表。返回表示图表的 **Shape** 对象，并将其添加到指定的集合中。



## 语法

express.**AddChart2(Style, Type, Left, Top, Width, Height, NewLayout)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Style | 可选 | number（int 精度） | 图表样式。使用 “-1” 获取 **Type** 中指定的图表类型的默认样式。 |
| Type | 可选 | XlChartType | 图表的类型。 |
| Left | 可选 | number（float 精度） | 图表左边缘相对于定位点的位置（以磅为单位）。 |
| Top | 可选 | number（float 精度） | 图表上边缘相对于定位点的位置（以磅为单位）。 |
| Width | 可选 | number（float 精度） | 图表的宽度（以磅为单位）。 |
| Height | 可选 | number（float 精度） | 图表的高度（以磅为单位）。 |
| NewLayout | 可选 | boolean | 如果 *NewLayout* 为 true，则使用新的动态格式规则插入图表，（标题处于打开状态，并且仅当有多个系列）时，图例才会打开。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例向活动演示文稿中添加一个饼图。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.AddChart2(-1, xlPie)
}
```


```JavaScript
/*本示例向第一个演示文稿的第一张幻灯片添加一个长度、高度都为150磅的图表。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Shapes.AddChart2(null, null, 100, 100, 150, 150, true)
}
```
