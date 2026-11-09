# OLEObjects.Border

返回一个 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/obj)** 对象，它代表对象的边框。



## 语法

express.**Border**

express   一个代表 **OLEObjects** 对象的变量。

## 类型

Border

## 示例


```JavaScript
/*此示例将工作表 Sheet1 中所有 OLE 对象的边框粗细设置为细线。*/
function test() {
    let border = Application.ActiveWorkbook.Worksheets.Item("Sheet1").OLEObjects().Border
    border.Weight = xlHairline
}
```


```JavaScript
/*此示例显示活动工作表中所有 OLE 对象边框的 TintAndShade 属性值是否为0。*/
function test() {
    let border = ActiveSheet.OLEObjects().Border
    alert(border.TintAndShade == 0)
}
```
