# Chart.Protect

保护图表使其不被修改。



## 语法

express.**Protect(Password, DrawingObjects, Contents, Scenarios, UserInterfaceOnly)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Password | 可选 | any | 一个字符串，该字符串为工作表或工作簿指定区分大小写的密码。如果省略此参数，不用密码就可以取消对工作表或工作簿的保护。否则，必须指定密码才能取消对工作表或工作簿的保护。如果忘记了密码，就无法取消对工作表或工作簿的保护。 |
| DrawingObjects | 可选 | any | 如果为 True，则保护形状。默认值是 True。 |
| Contents | 可选 | any | 如果为 True，则保护内容。对于图表，这样会保护整个图表。对于工作表，这样会保护锁定的单元格。默认值是 True。 |
| Scenarios | 可选 | any | 如果为 True，则保护方案。此参数仅对工作表有效。默认值是 True。 |
| UserInterfaceOnly | 可选 | any | 如果为 True，则保护用户界面，但不保护宏。如果省略此参数，则既保护宏也保护用户界面。 |

## 返回值

void

## 示例


```JavaScript
/*本示例保护图表工作表 Chart1 的形状、内容及用户界面，并通知用户。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Protect(null, true, true, false, true)
    alert("已对图表工作表 Chart1 进行形状、内容及用户界面保护")
}
```


```JavaScript
/*本示例设置密码保护工作表 Chart1 的内容。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Protect("Y6dh!et5", null, true, false)
}
```
