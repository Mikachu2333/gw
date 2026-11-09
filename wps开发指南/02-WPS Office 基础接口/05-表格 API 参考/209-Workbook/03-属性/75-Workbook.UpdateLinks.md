# Workbook.UpdateLinks

返回或设置一个 **[XlUpdateLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlUpdateLinks)** 常量，该常量指示更新嵌入 OLE 链接的工作簿设置。可读写。



## 语法

express.**UpdateLinks**

express   一个代表 **Workbook** 对象的变量。

## 类型

XlUpdateLinks

## 说明


| **XlUpdateLinks** 可为以下 **XlUpdateLinks** 常量之一。                |
| ------------------------------------------------------------- |
| **xlUpdateLinksAlways** 始终更新指定工作簿的嵌入 OLE 链接。                  |
| **xlUpdateLinksNever** 从不更新指定工作簿的嵌入 OLE 链接。                   |
| **xlUpdateLinksUserSetting** 按照用户对指定工作簿的设置，更新指定工作簿的嵌入 OLE 链接。 |



## 示例


```JavaScript
/*在本示例中，ET 确定更新链接的设置，并通知用户。*/
function test() {
    let	wkbOne = Application.Workbooks.Item(1)
    switch (wkbOne.UpdateLinks) {
        case xlUpdateLinksAlways:
            MsgBox("Links will always be updated for the specified workbook.")
            break
        case xlUpdateLinksNever:
            MsgBox("Links will never be updated for the specified workbook.")
            break
        case xlUpdateLinksUserSetting:
            MsgBox("Links will update according to user settting for the specified workbook.")
            break
    }
}
```


```JavaScript
/*本示例设置第一个工作簿的 UpdateLinks 属性的值，并通知用户。*/
function test() {
    Application.Workbooks.Item(1).UpdateLinks = xlUpdateLinksNever
    alert (Application.Workbooks.Item(1).UpdateLinks)
}
```
