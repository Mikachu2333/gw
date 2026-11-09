# Workbook.ProtectStructure

如果工作簿中的工作表次序处于保护状态，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectStructure**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例检查活动工作簿中工作表结构是否受保护，如果是则显示一条消息。*/
function test() {
    if (ActiveWorkbook.ProtectStructure) {
        MsgBox("Remember, you cannot delete, add, or change the location of any sheets in this workbook.")
    }
}
```


```JavaScript
/*本示例演示第一个工作簿先开启保护工作簿，再检查工作表结构是否受保护，若受保护则提示已处于保护状态。*/
function test() {
    Application.Workbooks.Item(1).Protect("Y6dh!et5", true, true)
    if (Workbooks.Item(1).ProtectStructure) {
        alert("工作表次序已处于保护状态")
    }
}
```
