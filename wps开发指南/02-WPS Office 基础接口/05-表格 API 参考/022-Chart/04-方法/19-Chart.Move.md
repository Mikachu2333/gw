# Chart.Move

将图表移到工作簿的另一位置。



## 语法

express.**Move(Before, After)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Before | 可选 | any | 将要在其之前放置所移动图表的工作表。如果指定了 After，则不能指定 Before。 |
| After | 可选 | any | 将要在其之后放置所移动图表的工作表。如果指定了 Before，则不能指定 After。 |

## 返回值

void

## 说明


如果既不指定 *Before* 也不指定 *After*，则 ET 将新建一个工作簿并将要移动的图表移到新工作簿中。



## 示例


```JavaScript
/*本示例将图表工作表Chart2移至图表工作表Chart1之前。*/
function test() {
    let chart = Application.Charts.Item("Chart2")
    chart.Move(Application.Charts.Item("Chart1"))
}
```


```JavaScript
/*本示例将图表工作表Chart1移至工作表Sheet1之后。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Move(null, Application.Worksheets.Item("Sheet1"))
}
```
