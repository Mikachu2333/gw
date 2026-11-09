# PageSetup.OddAndEvenPagesHeaderFooter

如果指定的 **PageSetup** 对象的奇数页和偶数页具有不同的页眉和页脚，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**OddAndEvenPagesHeaderFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在工作表 Sheet2 的奇数页和偶数页上使用不同的页眉和页脚。*/
function test() {
    Application.Worksheets.Item("Sheet2").PageSetup.OddAndEvenPagesHeaderFooter  = true
}
```


```JavaScript
/*此示例判断是否在奇偶页使用不同的页眉和页脚，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.OddAndEvenPagesHeaderFooter) {
        alert("奇偶页使用不同的页眉和页脚")
    } else {
        alert("奇偶页使用相同的页眉和页脚")
    }
}
```
