# TickLabels.NumberFormat

返回或设置对象的格式代码。可读/写 **String** 类型。



## 语法

express.**NumberFormat**

express   一个代表 **TickLabels** 对象的变量。

## 类型

string

## 说明


格式代码与 **“设置单元格格式”** 对话框中的 **“格式代码”** 选项是同一个字符串。 **Format** 函数使用的格式代码字符串与 **NumberFormat** 和 **[NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TickLabels/member/NumberFormatLocal)** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的数值轴刻度线标签的格式代码。*/
function test() {
    let tickLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.NumberFormat)
}
```


```JavaScript
/*本示例设置第一个演示文稿第一张幻灯片上第一个图表的数值轴刻度线标签的格式代码。*/
function test() {
    let tickLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).TickLabels
    tickLabels.NumberFormat = "0.00%"
}
```
