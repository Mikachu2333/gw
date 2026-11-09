# CategoryCollection.Item

返回单个图表类别。



## 语法

express.**Item(Index)**

express   一个代表 **CategoryCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

**ChartCategory** 

## 示例


```JavaScript
/*本示例筛选出活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的第二个可见类别。*/
function test() {
    let chartGroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.CategoryCollection().Item(2).IsFiltered = true
}
```


```JavaScript
/*本示例判断第一个演示文稿的第一张幻灯片上第一个图表中第一个图表组是否筛选出第一个可见类别，并通知用户。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    if (chartGroup.CategoryCollection().Item(1).IsFiltered) {
        alert("筛选出图表组的第一个可见类别")
    } else {
        alert("未筛选出图表组的第一个可见类别")
    }
}
```
