# Workbook.ProtectWindows

如果工作簿窗口受保护，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**ProtectWindows**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例检查活动工作簿窗口是否受保护，如果是则显示一条消息。*/
function test() {
    if (ActiveWorkbook.ProtectWindows) {
        MsgBox("Remember, you cannot rearrange any window in this workbook.")
    }
}
```


```JavaScript
/*本示例演示活动工作簿先开启保护工作簿窗口，再检查活动工作簿窗口是否受保护，若受保护则提示已处于保护状态。*/
function test() {
    ActiveWorkbook.Protect(undefined, undefined, true)
    if (ActiveWorkbook.ProtectWindows) {
        alert("活动工作簿窗口已处于保护状态。")
    }
}
```
