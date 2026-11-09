# Workbook.HighlightChangesOptions

控制共享工作簿更改的显示方式。



## 语法

express.**HighlightChangesOptions(When, Who, Where)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| When | 可选 | any | 显示的更改。可为以下 **[XlHighlightChangesTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlHighlightChangesTime)** 常量之一： **xlSinceMyLastSave** 、 **xlAllChanges** 或 **xlNotYetReviewed** 。 |
| Who | 可选 | any | 显示其所做更改的一个或多个用户。可以是“Everyone”、“Everyone but Me”或共享工作簿的某个用户名。 |
| Where | 可选 | any | 一个 A1-样式区域引用，该引用指定要检查更改的区域。 |

## 返回值

void

## 示例


```JavaScript
/*本示例在单个工作表中显示共享工作簿的更改。*/
function test() {
    ActiveWorkbook.HighlightChangesOptions(xlSinceMyLastSave, "Everyone")
    ActiveWorkbook.ListChangesOnNewSheet = true
}
```


```JavaScript
/*本示例设置共享工作簿显示在A1区域的所有更改，另设置显示在C1:D13区域（除我之外每个人）还未审阅的更改。*/
function test() {
    ActiveWorkbook.HighlightChangesOptions(xlAllChanges, undefined, "A1")
    ActiveWorkbook.HighlightChangesOptions(xlNotYetReviewed, "Everyone but Me", "C1:D13")
}
```
