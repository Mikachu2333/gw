# Workbook.LinkSources

返回工作簿中链接的数组。数组中的名称为链接的文档名、版本名、DDE 或 OLE 服务器名。如果工作簿中无链接，则返回 **Empty** 。



## 语法

express.**LinkSources(Type)**

express   一个代表 **Workbook** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 指定要返回的链接类型的 **[XlLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLink)** 常量之一。 |

## 返回值

Variant

## 说明


数组的格式是除发布服务器和订阅服务器以外的所有类型的一维数组。 所返回的字符串包含链接源的名称，以与该类型的链接的相应记号表示。例如，DDE 链接将使用“Server|Document!Item”语法。

对于发布者或订阅者，返回的数组是二维的。数组的第一列包含公告板文章的名称，第二列以文字的形式给出对公告板文章的引用。



## 示例


```JavaScript
/*本示例显示活动工作簿中 OLE 和 DDE 链接的列表。本方法应在包含一个或多个链接 ET 对象的工作簿中运行。*/
function test() {
    let linkSources = ActiveWorkbook.LinkSources(xlOLELinks)
    if (linkSources !== null) {
        for (let i = 0; i < linkSources.length; i++) {
            alert(`Link ${i + 1} : \n ${linkSources[i]}`)
        }
    }
}
```


```JavaScript
/*本示例将第一张工作簿上所有xlExcelLinks类型和xlOLELinks类型的链接分别赋值给M1和M2单元格。本方法应在包含一个或多个链接 ET 对象的工作簿中运行。*/
function test() {
    Range("M1").Value2 = Workbooks.Item(1).LinkSources(xlExcelLinks).toString()
    Range("M2").Value2 = Workbooks.Item(1).LinkSources(xlOLELinks).toString()
}
```
