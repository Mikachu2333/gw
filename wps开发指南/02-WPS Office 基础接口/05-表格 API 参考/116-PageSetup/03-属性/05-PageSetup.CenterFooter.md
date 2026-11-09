# PageSetup.CenterFooter

居中对齐 **PageSetup** 对象中的页脚信息。可读/写 **String** 类型。



## 语法

express.**CenterFooter**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置工作表 Sheet3 居中对齐的页脚信息为“第1页”。*/
function test() {
    Application.Worksheets.Item("Sheet3").PageSetup.CenterFooter = "第1页"
}
```


```JavaScript
/*此示例显示当前工作表居中对齐的页脚信息。*/
function test() {
    alert(ActiveSheet.PageSetup.CenterFooter)
}
```
