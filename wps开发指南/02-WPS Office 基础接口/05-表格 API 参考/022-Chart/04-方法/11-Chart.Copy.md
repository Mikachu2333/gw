# Chart.Copy

将工作表复制到工作簿的另一位置。



## 语法

express.**Copy(Before, After)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Before | 可选 | any | 将要在其之前放置所复制工作表的工作表。如果指定了 After，则不能指定 Before。 |
| After | 可选 | any | 将要在其之后放置所复制工作表的工作表。如果指定了 Before，则不能指定 After。 |

## 返回值

void

## 说明


如果既不指定 *Before* 也不指定 *After*，则 ET 将新建一个工作簿，其中包含复制的工作表。

 **Copy** 方法不支持 ChartObject 对象。



## 示例


```JavaScript
/*此示例复制工作表 Sheet1，并将其放置在工作表 Sheet3 之后。*/
function test() {
    Application.Worksheets.Item("Sheet1").Copy(null, Worksheets.Item("Sheet3"))
}
```


```JavaScript
/*此示例复制图表工作表 Chart1，并将其放置在图表工作表 Chart1 之前。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Copy(Charts.Item("Chart1"), null)
}
```
