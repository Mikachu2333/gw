# Axis.CrossesAt

返回或设置数值轴中与分类坐标轴的交点。仅应用于数值轴。可读/写 **Double** 类型。



## 语法

express.**CrossesAt**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **[Crosses](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/Crosses)** 属性更改为 **xlAxisCrossesCustom** 。

该属性不能用于雷达图。对于三维图表，该属性表示由分类轴定义的平面与数值轴相交的位置。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一张图表的分类轴与数值轴的交点位于数值轴上数值 1 的位置。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.CrossesAt = 1
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的分类轴与数值轴的交点位于数值轴上的位置。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(`图表的分类轴与数值轴的交点位于数值轴上数值 ${axis.CrossesAt} 的位置`)
}
```
