# Workbook.UpdateLink

更新 ET 链接、DDE 链接或 OLE 链接。



## 语法

express.**UpdateLink(Name, Type)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 可选 | any | 要更新的 ET 或 DDE/OLE 链接的名称（从 **[LinkSources](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/LinkSources)** 方法返回）。 |
| Type | 可选 | any | 指定链接类型的 **[XlLinkType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLinkType)** 常量之一。 |

## 返回值

void

## 说明


如果在没有任何参数的情况下调用 **UpdateLink** 方法，ET 将默认更新所有的工作表链接。



## 示例


```JavaScript
/*本示例更新活动工作簿中的所有链接。*/
function test() {
    ActiveWorkbook.UpdateLink(ActiveWorkbook.LinkSources())
}
```


```JavaScript
/*本示例更新第一个工作簿中类型为xlLinkTypeExcelLinks的所有链接。*/
function test() {
    Workbooks.Item(1).UpdateLink(undefined, xlLinkTypeExcelLinks)
}
```
