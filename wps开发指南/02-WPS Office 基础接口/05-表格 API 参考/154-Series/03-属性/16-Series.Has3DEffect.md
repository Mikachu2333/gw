# Series.Has3DEffect

如果数据系列有三维外观，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Has3DEffect**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于气泡图。



## 示例


```JavaScript
/*此示例显示活动工作表中第一个图表的第二个数据系列是否有三维外观。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(2).Has3DEffect)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第三个数据系列是否有三维外观。*/
function test() {
    let series3 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(3)
    alert(series3.Has3DEffect)
}
```
