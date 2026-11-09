# CategoryCollection.Item

从 **CategoryCollection** 对象返回单个对象。



## 语法

express.**Item(Index)**

express   一个代表 **CategoryCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

**ChartCategory** 对象

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组的第三个类别是否筛选出序列。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.CategoryCollection().Item(3).IsFiltered)
}
```


```JavaScript
/*此示例判断图表工作表 Chart1 第一个图表组的第二个类别是否筛选出序列，并通知用户。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    if (chartgroup.CategoryCollection().Item(2).IsFiltered) {
        alert("筛选出序列")
    } else {
        alert("未筛选出序列")
    }
}
```
