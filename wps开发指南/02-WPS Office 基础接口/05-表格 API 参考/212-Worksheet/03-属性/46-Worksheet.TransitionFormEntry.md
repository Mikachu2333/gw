# Worksheet.TransitionFormEntry

如果 ET 对工作表使用 Lotus 1-2-3 的公式输入规则，则该属性的值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**TransitionFormEntry**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例对 Sheet1 使用 Lotus 1-2-3 公式输入规则。*/
function test() {
    Worksheets.Item("Sheet1").TransitionFormEntry = true
}
```


```JavaScript
/*此示例判断如果活动工作表未使用 Lotus 1-2-3 公式输入规则，则将活动工作表设置为使用 Lotus 1-2-3 公式输入规则。*/
function test() {
    if (Application.ActiveSheet.TransitionFormEntry == false) {
        Application.ActiveSheet.TransitionFormEntry = true
        alert("已将活动工作表设置为使用 Lotus 1-2-3 公式输入规则")
    } else {
        alert("活动工作表使用 Lotus 1-2-3 公式输入规则")
    }
}
```
