# DisplayUnitLabel.Characters

返回 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/obj)** 对象，它代表对象文本内某个区域的字符。使用 **Characters** 对象可为文本字符串内的字符设置格式。



## 语法

express.**Characters(Start, Length)**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | any | 要返回的第一个字符。如果此参数是 1 或被省略，则此属性返回一个以第一个字符为开头的字符区域。 |
| Length | 可选 | any | 要返回的字符数。如果省略此参数，则此属性返回字符串的后半部分（_Start_ 字符之后的所有字符）。 |

## 返回值

Characters

## 说明


 **Characters** 对象不是集合。



## 示例


```JavaScript
/*下例将 Sheet1 上的第一个图表数值轴上的单位标签中部分文本加粗。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Characters(2, 2).Font.Bold = true
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 中数值轴上的单位标签前三个字符。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Characters(null, 3).Text)
}
```
