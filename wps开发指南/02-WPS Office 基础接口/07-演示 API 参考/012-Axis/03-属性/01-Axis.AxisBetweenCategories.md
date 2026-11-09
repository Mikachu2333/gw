# Axis.AxisBetweenCategories

如果数值轴与分类坐标轴相交于分类之间，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AxisBetweenCategories**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


该属性仅应用于分类轴，而不应用于三维图表。



## 示例


```JavaScript
/*本示例使活动演示文稿的第一张幻灯片中第一个图表的数值轴与分类轴相交于分类之间。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlCategory).AxisBetweenCategories = true
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的数值轴与分类轴是否相交于分类之间。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.AxisBetweenCategories)
}
```
