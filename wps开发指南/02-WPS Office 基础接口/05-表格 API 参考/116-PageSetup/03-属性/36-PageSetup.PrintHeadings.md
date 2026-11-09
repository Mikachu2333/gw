# PageSetup.PrintHeadings

如果打印本页时同时打印行标题和列标题，则该值为 **True** 。仅应用于工作表。 **Boolean** 类型，可读写。



## 语法

express.**PrintHeadings**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 说明


 **[DisplayHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WorksheetView/member/DisplayHeadings)** 属性控制标题在屏幕上的显示。



## 示例


```JavaScript
/*本示例关闭打印 Sheet1 中的标题。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.PrintHeadings = false
}
```


```JavaScript
/*此示例判断是否开启打印活动工作表中的标题，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.PrintHeadings) {
        alert("开启打印活动工作表中的标题")
    } else {
        alert("关闭打印活动工作表中的标题")
    }
}
```
