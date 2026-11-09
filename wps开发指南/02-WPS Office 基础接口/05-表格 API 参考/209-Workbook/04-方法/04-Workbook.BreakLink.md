# Workbook.BreakLink

将链接到其他 ET 源或 OLE 源的公式转换为值。



## 语法

express.**BreakLink(Name, Type)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 链接的名称。 |
| Type | 必选 | XlLinkType | 链接类型。 |

## 返回值

void

## 示例


```JavaScript
/*本示例ET转换了活动工作簿中的第一个链接（ET 链接类型）。此示例假定活动工作簿中至少有一个公式链接到另一个 ET 源。*/
function test() {
    // Define variable as an Excel link type.
    let linksoure = ActiveWorkbook.LinkSources(xlExcelLinks)
    // Break the first link in the active workbook.
    ActiveWorkbook.BreakLink(linksoure[0], xlLinkTypeExcelLinks)
}
```


```JavaScript
/*本示例先将第一张工作簿上所有xlExcelLinks类型和xlOLELinks类型的链接分别赋值给M1和M2单元格，然后将所有xlExcelLinks类型的链接转换为值。*/
function test() {
    Range("M1").Value2 = Workbooks.Item(1).LinkSources(xlExcelLinks).toString()
    Range("M2").Value2 = Workbooks.Item(1).LinkSources(xlOLELinks).toString()
    let linkSource = Workbooks.Item(1).LinkSources(xlExcelLinks)
    for (let i = 0; i < linkSource.length; i++) {
        Workbooks.Item(1).BreakLink(linkSource[i], xlLinkTypeExcelLinks)
    }
}
```
