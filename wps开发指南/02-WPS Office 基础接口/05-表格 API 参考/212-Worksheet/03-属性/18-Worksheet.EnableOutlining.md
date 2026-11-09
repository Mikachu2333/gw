# Worksheet.EnableOutlining

如果当仅限于用户界面保护处于打开状态时，启用分级显示符号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableOutlining**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在受保护的工作表上启用分级显示符号。*/
function test() {
    Application.ActiveSheet.EnableOutlining = true
    Application.ActiveSheet.Protect(null, null, true, null, true)
}
```


```JavaScript
/*本示例判断如果第一张工作表启用分级显示符号，则将分级显示符号关闭。*/
function test() {
    if (Application.Sheets.Item(1).EnableOutlining) {
        Application.Sheets.Item(1).EnableOutlining = false
    }
}
```
