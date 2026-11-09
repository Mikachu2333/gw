# DownBars.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DownBars** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一个内嵌图表的第一个图表组的跌柱线。*/
function test() {
    let downbars = Application.ActiveDocument.InlineShapes(1).Chart.ChartGroups(1).DownBars
    downbars.Select()
}
```


```JavaScript
/*本示例判断如果活动文档中第一个内嵌图表的第一个图表组的跌柱线的名称为“跌柱线 1”，则选中该跌柱线。*/
function test() {
    let downbars = Application.ActiveDocument.InlineShapes(1).Chart.ChartGroups(1).DownBars
    if (downbars.Name == "跌柱线 1") {
        downbars.Select()
    }
}
```
