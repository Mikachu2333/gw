# PageSetup.PrintNotes

如果打印工作表时单元格批注作为尾注一起打印，则该值为 **True** 。仅应用于工作表。 **Boolean** 类型，可读写。



## 语法

express.**PrintNotes**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 说明


使用 **PrintComments** 属性可以文本框或尾注形式打印批注。



## 示例


```JavaScript
/*本示例关闭打印批注。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.PrintNotes = false
}
```


```JavaScript
/*本示例判断打印活动工作表时是否开启打印批注，并通知用户结果。*/
function test() {
    if (ActiveSheet.PageSetup.PrintNotes) {
        alert("打印活动工作表时开启打印批注")
    } else {
        alert("打印活动工作表时关闭打印批注")
    }
}
```
