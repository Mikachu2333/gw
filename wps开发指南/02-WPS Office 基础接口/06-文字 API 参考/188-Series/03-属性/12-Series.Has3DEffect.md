# Series.Has3DEffect

如果系列有三维外观，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Has3DEffect**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于气泡图。



## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的第二个数据系列是否具有三维外观。*/
function test() {
    alert(ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).Has3DEffect)
}
```


```JavaScript
/*本示例为第一个文档中的第一个图表的第一个数据系列设置三维外观。*/
function test() {
    Documents.Item(1).InlineShapes(1).Chart.SeriesCollection(1).Has3DEffect = true
}
```
