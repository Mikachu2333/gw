# Worksheet.EnableAutoFilter

如果当仅限于用户界面保护处于打开状态时，启用自动筛选箭头，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableAutoFilter**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用受保护的工作表上的自动筛选箭头。*/
function test() {
    Application.ActiveSheet.EnableAutoFilter = true
    Application.ActiveSheet.Protect(null, null, true, null, true)
}
```


```JavaScript
/*本示例判断活动工作簿上每一张工作表是否启用自动筛选箭头，并通知用户。*/
function test() {
    for (let i = 1; i <= Sheets.Count; i++) {
        let sheet = Application.Sheets.Item(i)
        if (sheet.EnableAutoFilter) {
            alert(`工作表 ${sheet.Name} 启用自动筛选箭头`)
        } else {
            alert(`工作表 ${sheet.Name} 未启用自动筛选箭头`)
        }
    }
}
```
