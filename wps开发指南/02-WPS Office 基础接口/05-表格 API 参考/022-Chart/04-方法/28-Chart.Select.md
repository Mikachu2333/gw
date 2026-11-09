# Chart.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | （仅用于工作表）。如果为 True，则用指定的对象替换当前所选内容。如果为 False，则扩展当前所选内容以包括以前选择的对象和指定的对象。 |

## 返回值

void

## 说明


要选择图表，请使用 **Select** 方法。要使单个图表成为活动图表，请使用 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Activate)** 方法。



## 示例


```JavaScript
/*本示例选定图表工作表 Chart1。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Select()
}
```


```JavaScript
/*本示例扩展所选的工作表 Sheet1，增加选择 Chart1 工作表。*/
function test() {
    Application.Sheets.Item("Sheet1").Select()
    let chart = Application.Charts.Item("Chart1")
    chart.Select(false)
}
```
