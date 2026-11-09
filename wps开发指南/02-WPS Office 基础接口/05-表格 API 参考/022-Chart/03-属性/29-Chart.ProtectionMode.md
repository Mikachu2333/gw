# Chart.ProtectionMode

如果启用了用户界面专用保护，则为 **True** 。要打开用户界面保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Protect)** 方法，并将 *UserInterfaceOnly* 参数设置为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectionMode**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例显示活动工作表 ProtectionMode 属性的状态。*/
function test() {
    alert(Application.ActiveSheet.ProtectionMode)
}
```


```JavaScript
/*本示例保护图表工作表 Chart1，然后判断是否启用用户界面并通知用户。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Protect(null, true, false, true, true)
    if (chart.ProtectionMode == false) {
        alert("工作表的用户界面未受保护")
    } else {
        alert("工作表的用户界面受保护")
    }
}
```
