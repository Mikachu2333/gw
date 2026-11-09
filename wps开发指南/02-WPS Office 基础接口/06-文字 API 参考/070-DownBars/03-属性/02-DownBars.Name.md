# DownBars.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **DownBars** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个文档中第一个内嵌图表的第一个图表组的跌柱线的名称。*/
function test() {
    let downbars = Application.Documents.Item(1).InlineShapes(1).Chart.ChartGroups(1).DownBars
    alert(downbars.Name)
}
```


```JavaScript
/*本示例判断如果活动文档中第一个内嵌图表的第一个图表组的跌柱线的名称为“跌柱线 1”，则将该跌柱线的线条的粗细设置为2磅。*/
function test() {
    let downbars = Application.ActiveDocument.InlineShapes(1).Chart.ChartGroups(1).DownBars
    if (downbars.Name == "跌柱线 1") {
        downbars.Format.Line.Weight = 2
    }
}
```
