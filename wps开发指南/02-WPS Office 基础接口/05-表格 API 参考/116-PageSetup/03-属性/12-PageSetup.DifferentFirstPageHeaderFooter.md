# PageSetup.DifferentFirstPageHeaderFooter

如果在第一页使用不同的页眉或页脚，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DifferentFirstPageHeaderFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在工作表 Sheet2 的第一页上使用不同的页眉或页脚。*/
function test() {
    Application.Worksheets.Item("Sheet2").PageSetup.DifferentFirstPageHeaderFooter = true
}
```


```JavaScript
/*此示例判断是否在首页使用不同的页眉或页脚，并将结果通知用户。*/
function test() {
    if (ActiveSheet.PageSetup.DifferentFirstPageHeaderFooter) {
        alert("首页使用不同的页眉或页脚")
    } else {
        alert("首页使用相同的页眉或页脚")
    }
}
```
