# Workbook.ChangeLink

将链接从某一文档更改到另一文档。



## 语法

express.**ChangeLink(Name, NewName, Type)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 要更改的 ET 链接或 DDE/OLE 链接的名称，从 **[LinkSources](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/LinkSources)** 方法所返回的。 |
| NewName | 必选 | string | 链接的新名称。 |
| Type | 可选 | XlLinkType | 链接类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例更改 ET 链接。此示例假定活动工作簿中至少有一个公式链接到另一个 ET 源。*/
function test() {
    ActiveWorkbook.ChangeLink("工作簿3", "工作簿2", xlExcelLinks)
}
```


```JavaScript
/*本示例更改 ET 链接，并显示修改前后的所有 ET 链接名称。此示例假定活动工作簿中至少有一个公式链接到另一个 ET 源。*/
function test() {
    alert(Workbooks.Item(1).LinkSources(xlOLELinks).toString())
    Workbooks.Item(1).ChangeLink("Excel.Sheet.12|D:\\示例\\工作簿3.xlsx!'", "Excel.Sheet.12|D:\\示例\\example1.xlsx!'", xlOLELinks)
    alert(Workbooks.Item(1).LinkSources(xlOLELinks).toString())
}
```
