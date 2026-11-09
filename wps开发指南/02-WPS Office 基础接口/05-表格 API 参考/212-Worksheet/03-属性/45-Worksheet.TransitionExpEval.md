# Worksheet.TransitionExpEval

如果 ET 对工作表使用 Lotus 1-2-3 的表达式求值规则，则该属性的值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**TransitionExpEval**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例对工作表 Sheet1 使用 Lotus 1-2-3 的表达式求值规则。*/
function test() {
    Worksheets.Item("Sheet1").TransitionExpEval = true
}
```


```JavaScript
/*此示例判断如果活动工作表未使用 Lotus 1-2-3 的表达式求值规则，则将活动工作表设置为使用 Lotus 1-2-3 的表达式求值规则。*/
function test() {
    if (Application.ActiveSheet.TransitionExpEval == false) {
        Application.ActiveSheet.TransitionExpEval = true
        alert("已将活动工作表设置为使用 Lotus 1-2-3 的表达式求值规则")
    } else {
        alert("活动工作表使用 Lotus 1-2-3 的表达式求值规则")
    }
}
```
