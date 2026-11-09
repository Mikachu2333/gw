# Application.Presentations

返回一个 **[Presentations](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Presentations/obj)** 集合，该集合代表所有打开的演示文稿。只读。



## 语法

express.**Presentations**

express   一个代表 **Application** 对象的变量。

## 类型

Presentations

## 说明


如果Visual Studio解决方案包含 **Kingsoft.Office.Interop.Wppapi** 的引用，该属性将映射到以下类型:

 **Kingsoft.Office.Interop.Wppapi.\_Application.Presentations** 



## 示例


```JavaScript
/*本示例打开名为“Test”的演示文稿。*/
function test() {
    Application.Presentations.Open("D:\\TestFile\\Test.pptx")
}
```


```JavaScript
/*本示例将第一个演示文稿以“Year-End Report.pptx”名称另存在D盘。*/
function test() {
    Application.Presentations.Item(1).SaveAs("D:\\Year-End Report.pptx")
}
```


```JavaScript
/*本示例关闭演示文稿“Year-end report”。*/
function test() {
    Application.Presentations.Item("Year-End Report.pptx").Close()
}
```
