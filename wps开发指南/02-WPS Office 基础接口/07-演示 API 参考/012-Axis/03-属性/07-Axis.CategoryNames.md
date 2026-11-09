# Axis.CategoryNames

以文本数组形式返回或设置指定坐标轴中所有分类的名称。可读/写 **Variant** 类型。



## 语法

express.**CategoryNames**

express   一个代表 **Axis** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片的第一张图表的分类轴的所有类别的名称。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.CategoryNames.toString())
}
```


```JavaScript
/*本示例显示第一篇演示文稿的第一张幻灯片的第二张图表的分类轴的所有类别的名称。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    for (let i = 0; i < axis.CategoryNames.length; i++) {
        alert(axis.CategoryNames[i])
    }
}
```
