# PageSetup.Zoom

返回或设置一个 **Variant** 值，它代表一个数值在 10% 到 400% 之间的百分比，该百分比为 ET 打印工作表时的缩放比例。



## 语法

express.**Zoom**

express   一个代表 **PageSetup** 对象的变量。

## 类型

any

## 说明


此属性仅适用于工作表。

如果此属性设置为 **False** ，则 **[FitToPagesWide](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/FitToPagesWide)** 和 **[FitToPagesTall](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/FitToPagesTall)** 属性控制工作表缩放的方式。

所有缩放均保持原文档的长宽比例。



## 示例


```JavaScript
/*此示例设置打印 Sheet1 时的缩放比例为 150%。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.Zoom = 150
}
```


```JavaScript
/*本示例显示打印活动工作表时的缩放比例。*/
function test() {
    alert(`打印时页面缩放比例为 ${ActiveSheet.PageSetup.Zoom}`)
}
```
