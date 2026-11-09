# ChartTitle.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张图表的标题对象的名称。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle
    alert(charttitle.Name)
}
```


```JavaScript
/*本示例显示第一张工作表上图表 Chart 2 的标题对象名称是否为标题。*/
function test() {
    let charttitle = Application.Sheets.Item(1).ChartObjects("Chart 2").Chart.ChartTitle
    alert(charttitle.Name == "标题")
}
```
