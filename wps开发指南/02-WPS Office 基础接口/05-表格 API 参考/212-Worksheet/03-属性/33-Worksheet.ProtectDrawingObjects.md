# Worksheet.ProtectDrawingObjects

如果形状是受保护的，则为 **True** 。要打开形状保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法，并将 _DrawingObjects_ 参数设置为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectDrawingObjects**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果工作表 Sheet1 中的形状处于保护状态，则显示一个消息框。*/
function test() {
    if (Worksheets.Item("Sheet1").ProtectDrawingObjects) {
        alert("The shapes on Sheet1 are protected.")
    }
}
```


```JavaScript
/*本示例判断工作簿中每一张工作表的形状是否处于保护状态。*/
function test() {
    for (let i = 1; i <= Application.Sheets.Count; i++) {
        let sheet = Application.Sheets.Item(i)
        if (sheet.ProtectDrawingObjects) {
            alert(`工作表 ${sheet.Name} 中的形状处于保护状态`)
        } else {
            alert(`工作表 ${sheet.Name} 中的形状未处于保护状态`)
        }
    }
}
```
