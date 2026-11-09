# Chart.ProtectDrawingObjects

如果形状是受保护的，则为 **True** 。要打开形状保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Protect)** 方法，并将 *DrawingObjects* 参数设置为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectDrawingObjects**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的形状是否受保护。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    alert(chart.ProtectDrawingObjects)
}
```


```JavaScript
/*本示例判断图表工作表 Chart2 的形状是否受保护，并通知用户。*/
function test() {
    let chart = Application.Charts.Item("Chart2")
    if (chart.ProtectDrawingObjects) {
        alert("工作表的形状受保护")
    } else {
        alert("工作表的形状未受保护")
    }
}
```
