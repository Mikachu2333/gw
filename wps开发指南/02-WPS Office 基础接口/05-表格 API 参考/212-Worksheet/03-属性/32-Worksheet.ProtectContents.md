# Worksheet.ProtectContents

如果工作表内容是受保护的，则为 **True** 。此属性保护单独的单元格。要打开内容保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法，并将 _Contents_ 参数设置为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectContents**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果 sheet1 的内容处于保护状态，则显示一个消息框。*/
function test() {
    if (Worksheets.Item("Sheet1").ProtectContents) {
        alert("The contents of Sheet1 are protected.")
    }
}
```


```JavaScript
/*本示例判断工作簿中每一张工作表的内容是否处于保护状态。*/
function test() {
    for (let i = 1; i <= Application.Sheets.Count; i++) {
        let sheet = Application.Sheets.Item(i)
        if (sheet.ProtectContents) {
            alert(`工作表 ${sheet.Name} 的内容处于保护状态`)
        } else {
            alert(`工作表 ${sheet.Name} 的内容未处于保护状态`)
        }
    }
}
```
