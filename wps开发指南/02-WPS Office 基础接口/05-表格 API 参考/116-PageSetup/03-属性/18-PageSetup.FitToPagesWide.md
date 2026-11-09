# PageSetup.FitToPagesWide

返回或设置打印工作表时，对工作表进行缩放使用的页宽。仅应用于工作表。 **Variant** 类型，可读写。



## 语法

express.**FitToPagesWide**

express   一个代表 **PageSetup** 对象的变量。

## 类型

any

## 说明


如果该属性值为 **False** ，ET 将根据 **FitToPagesTall** 属性缩放工作表。

如果 **[Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/Zoom)** 属性值为 **True** ，则忽略 **FitToPagesWide** 属性。



## 示例


```JavaScript
/*本示例设置 ET 准确按照一页的宽度和高度打印 Sheet1。*/
function test() {
    let pagesetup = Application.Worksheets.Item("Sheet1").PageSetup
    pagesetup.Zoom = false
    pagesetup.FitToPagesTall = 1
    pagesetup.FitToPagesWide = 1
}
```


```JavaScript
/*本示例展示打印活动工作表时对工作表进行缩放使用的页宽。*/
function test() {
    alert(`活动工作表缩放使用的页宽为 ${ActiveSheet.PageSetup.FitToPagesWide} `)
}
```
