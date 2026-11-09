# Tab.TintAndShade

返回或设置一个 **Single** ，使颜色变深或变浅。



## 语法

express.**TintAndShade**

express   一个代表 **Tab** 对象的变量。

## 类型

any

## 说明


可以为 **TintAndShade** 属性输入 -1（最暗）到 1（最亮）之间的数字，零 (0) 为中间值。

建议不要尝试将此属性设置为小于 -1 或大于 1 的值。ET 将在内部将该值更正为属于有效值范围内的某个值。此属性用于主题颜色和非主题颜色。



## 示例


```JavaScript
/*本示例设置工作表 Sheet1 选项卡的颜色亮度。*/
function test() {
    Worksheets.Item("Sheet1").Tab.TintAndShade = 0.3
}
```


```JavaScript
/*本示例设置图表工作表 Chart1 选项卡的颜色和亮度。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Tab.ColorIndex = 7
    chart.Tab.TintAndShade = -0.2
}
```
