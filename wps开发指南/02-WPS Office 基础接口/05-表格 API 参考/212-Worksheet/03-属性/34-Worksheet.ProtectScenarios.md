# Worksheet.ProtectScenarios

如果工作表的方案处于保护状态，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectScenarios**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果 sheet1 中的方案处于保护状态，则将显示消息框。*/
function test() {
    if (Worksheets.Item("Sheet1").ProtectScenarios) {
        alert("Scenarios are protected on this worksheet.")
    }
}
```


```JavaScript
/*本示例判断工作簿中每一张工作表的方案是否处于保护状态。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        let sheet = Application.Sheets.Item(i)
        if (sheet.ProtectScenarios) {
            alert(`工作表 ${sheet.Name} 方案处于保护状态`)
        } else {
            alert(`工作表 ${sheet.Name} 方案未处于保护状态`)
        }
    }
}
```
