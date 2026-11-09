# Worksheet.Outline

返回一个 **[Outline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/obj)** 对象，该对象表示指定工作表的分级显示。只读。



## 语法

express.**Outline**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Outline

## 示例


```JavaScript
/*本示例将 Sheet1 的分级显示设置为使用自动样式。*/
function test() {
    Worksheets.Item("Sheet1").Outline.AutomaticStyles = true
}
```


```JavaScript
/*本示例显示活动工作表上分级显示中汇总行的位置是否为xlSummaryBelow。*/
function test() {
    alert(ActiveSheet.Outline.SummaryRow == xlSummaryBelow)
}
```
