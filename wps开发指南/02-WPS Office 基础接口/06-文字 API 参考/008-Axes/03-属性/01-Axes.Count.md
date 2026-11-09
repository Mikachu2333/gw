# Axes.Count

返回集合中对象的数目。只读 **Long** 类型。



## 语法

express.**Count**

express   一个代表 **Axes** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一张图表的坐标轴的数量。*/
function test() {
    let axes = ActiveDocument.InlineShapes(1).Chart.Axes()
    alert(`坐标轴的数量：${axes.Count}`)
}
```
