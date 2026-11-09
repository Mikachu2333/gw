# ChartObject.Select

选择对象。



## 语法

express.**Select(Replace)**

express   一个代表 **ChartObject** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Replace | 可选 | any | 如果为 True，则用指定的对象替换当前所选内容。如果为 False，则扩展当前所选内容以包括以前选择的对象和指定的对象。 |

## 返回值

any

## 示例


```JavaScript
/*此示例扩展选择工作表 Sheet1 的第一个图表，增加选择图表 Chart 2。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Select()
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 2")
    chartobject.Select(false)
}
```


```JavaScript
/*此示例选择工作表 Sheet1 中图表 Chart 1。*/
function test() {
    let chartobject = Application.Worksheets.Item("Sheet1").ChartObjects("Chart 1")
    chartobject.Select()
}
```
