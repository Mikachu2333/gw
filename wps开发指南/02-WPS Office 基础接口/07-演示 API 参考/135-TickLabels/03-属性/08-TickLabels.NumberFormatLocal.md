# TickLabels.NumberFormatLocal

以用户语言返回或设置对象的格式代码字符串。可读/写 **Variant** 类型。



## 语法

express.**NumberFormatLocal**

express   一个代表 **TickLabels** 对象的变量。

## 类型

any

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TickLabels/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的数值轴刻度线标签的格式代码（以用户语言表示）。*/
function test() {
    let tickLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.NumberFormatLocal)
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的数值轴刻度线标签的格式代码（以用户语言表示）。*/
function test() {
    let tickLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).TickLabels
    tickLabels.NumberFormatLocal = "0.00E+00"
}
```
