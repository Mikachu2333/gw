# Legend.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **Legend** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的图例是否带有阴影。*/
function test() {
    let legend = ActiveDocument.InlineShapes.Item(1).Chart.Legend
    alert(legend.Shadow)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的图例设置为有阴影。*/
function test() {
    let legend = Documents.Item(1).Shapes.Item(1).Chart.Legend
    legend.Shadow = true
}
```
